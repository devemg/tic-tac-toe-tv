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
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const navigate = useNavigate();
  const boxesRef = useRef<HTMLDivElement>(null);
  const [showExitDialog, setshowExitDialog] = useState(false);
  const dialogExitRef = useRef<HTMLDivElement>(null);
  const { backManager } = useGame();
  const { t } = useTranslation();

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
        <p>{t('home.line')}</p>
        <div className={styles['page-boxes']} navi-container="horizontal" navi-default="true" ref={boxesRef}>
          <button onClick={() => navigate('/profiles')} navi-element="true">
            <img src={newgame} alt="Gamepad" />
            <h3>{t('home.new-game')}</h3>
          </button>
          <button onClick={() => navigate('/board')} navi-element="true">
            <img src={board} alt="Winner Podium" />
            <h3>{t('home.scoreboard')}</h3>
          </button>
        </div>
        <div className="page-buttons" navi-container="horizontal">
          <button onClick={() => navigate('/instructions')} navi-element="true">
            <img src={question} alt="Question" />
            {t('home.how-to')}
          </button>
          <button onClick={() => navigate('/settings')} navi-element="true">
            <img src={gear} alt="Gear" />
            {t('home.settings')}
          </button>
        </div>
      </div>
      <Dialog show={showExitDialog} onClose={() => setshowExitDialog(false)} >
        <div className="modal">
          <p>{t('exit-text')}</p>
          <div className="page-buttons" ref={dialogExitRef} navi-container="horizontal" navi-blocked="true">
            <button navi-element="true" onClick={() => setshowExitDialog(false)}>{t('no')}</button>
            <button navi-element="true" onClick={exitApp}>{t('yes')}</button>
          </div>
        </div>
      </Dialog>
    </>

  )
}
