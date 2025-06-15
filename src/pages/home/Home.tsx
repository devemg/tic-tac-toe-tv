import { useNavigate } from "react-router"
import styles from './home.module.scss';
import newgame from '@assets/gamepad.svg';
import board from '@assets/podium-winner.svg';
import question from '@assets/question.svg';
import gear from '@assets/gear.svg';
import { useEffect, useRef, useState } from "react";
import { focusContainerRef } from "@utils/focus.utils";
import { Dialog } from "@components";
import { useGame } from "@context";
import { closeApp } from "@utils/tizen.utils";

export const HomePage = () => {
  const navigate = useNavigate();
  const boxesRef = useRef<HTMLDivElement>(null);
  const [showExitDialog, setshowExitDialog] = useState(false);
  const dialogExitRef = useRef<HTMLDivElement>(null);
  const { backManager } = useGame();

  useEffect(() => {
    focusContainerRef(boxesRef);
  }, []);

  useEffect(() => {
    if (showExitDialog) {
      focusContainerRef(dialogExitRef);
    } else {
      focusContainerRef(boxesRef);
      backManager.setCustomHandler(() => {
        setshowExitDialog(true);
      });
    }
  }, [showExitDialog]);

  const exitApp = () => {
    try {
      closeApp();
    } catch (e) {
      setshowExitDialog(false);
    }
  }

  return (
    <>
      <div className={styles['page']} navi-container="vertical">
        <div className={styles['page-logo']}>
          <img src="/logo.svg" alt="" />
          <h1>Tic Tac Toe</h1>
        </div>
        <p>Challenge a friend in the classic game of strategy and fun!</p>
        <div className={styles['page-boxes']} navi-container="horizontal" navi-default="true" ref={boxesRef}>
          <button onClick={() => navigate('/profiles')} navi-element="true">
            <img src={newgame} alt="Gamepad" />
            New Game
          </button>
          <button onClick={() => navigate('/board')} navi-element="true">
            <img src={board} alt="Winner Podium" />
            Scoreboard
          </button>
        </div>
        <div className="page-buttons" navi-container="horizontal">
          <button onClick={() => navigate('/instructions')} navi-element="true">
            <img src={question} alt="Question" />
            How to play?
          </button>
          <button onClick={() => navigate('/settings')} navi-element="true">
            <img src={gear} alt="Gear" />
            Settings
          </button>
        </div>
      </div>
      <Dialog show={showExitDialog} onClose={() => setshowExitDialog(false)} >
        <div className="modal">
          <p>sure you want to exit?</p>
          <div className="page-buttons" ref={dialogExitRef} navi-container="horizontal" navi-blocked="true">
            <button navi-element="true" onClick={() => setshowExitDialog(false)}>No</button>
            <button navi-element="true" onClick={exitApp}>Yes</button>
          </div>
        </div>
      </Dialog>
    </>

  )
}
