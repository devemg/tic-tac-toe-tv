import { useEffect, useRef, useState } from "react";
import { Board, Dialog } from "@components";
import { GamePlayerType } from "@models/game-player-type";
import { useNavigate } from "react-router";
import { focusContainerRef } from "@utils/focus.utils";
import { useGame } from "@context";
import styles from './game.module.scss';
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import clsx from 'clsx';

export const GamePage = () => {
    const [activePlayer, setActivePlayer] = useState<GamePlayerType>('p1');
    const [winner, setWinner] = useState<GamePlayerType | undefined | null>();
    const [showExitDialog, setshowExitDialog] = useState(false);
    const { backManager, names } = useGame();
    const navigate = useNavigate();
    const boardRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const dialogExitRef = useRef<HTMLDivElement>(null);

    const toglePlayer = () => {
        setActivePlayer(prevPlayer => prevPlayer === 'p1' ? 'p2' : 'p1');
    }

    const manageWinner = (winner: GamePlayerType | null) => {
        setWinner(winner);
    }

    const playAgain = () => {
        setActivePlayer('p1');
        setWinner(undefined);
    }

    useEffect(() => {
        if (winner || winner === null) {
            focusContainerRef(dialogRef);
        } else {
            focusContainerRef(boardRef);
            backManager.setCustomHandler(() => {
                if (winner === undefined) {
                    setshowExitDialog(true);
                }
            });
        }
    }, [winner]);

    useEffect(() => {
        if (showExitDialog) {
            focusContainerRef(dialogExitRef);
        } else {
            focusContainerRef(boardRef);
            backManager.setCustomHandler(() => {
                if (winner === undefined) {
                    setshowExitDialog(true);
                }
            });
        }
    }, [showExitDialog]);


    return (
        <div className={styles['page']}>
            <div className={styles['players']}>
                <div className={clsx(
                    styles[activePlayer],
                    activePlayer === 'p1' && styles['active']
                )}
                >
                    <p>{names.p1}</p>
                    <img src={icono} alt="O" />
                </div>
                <div className={clsx(
                    styles[activePlayer],
                    activePlayer === 'p2' && styles['active']
                )}>
                    <p>{names.p2}</p>
                    <img src={iconx} alt="X" />
                </div>
            </div>
            <div className={styles['board-container']}>
                <Board ref={boardRef} activePlayer={activePlayer} winner={winner} togglePlayer={toglePlayer} manageWinner={manageWinner} />
            </div>
            <Dialog show={!!winner || winner === null} onClose={() => { }} >
                <div className="modal">
                    {winner !== null ? <>
                        <p>Winner: {activePlayer === 'p1' ? 'Player 1' : 'Player 2'}</p>
                        <p>Congratulations!! </p>
                    </>
                        : <p>Another game?</p>}
                    <div className="page-buttons" ref={dialogRef} navi-container="horizontal" navi-blocked="true">
                        <button navi-element="true" onClick={() => navigate('/')}>Go Back</button>
                        <button navi-element="true" onClick={playAgain}>Play Again</button>
                    </div>
                </div>
            </Dialog>
             <Dialog show={showExitDialog} onClose={() => setshowExitDialog(false)} >
                <div className="modal">
                    <p>sure you want to exit?</p>
                    <div className="page-buttons" ref={dialogExitRef} navi-container="horizontal" navi-blocked="true">
                        <button navi-element="true" onClick={() => setshowExitDialog(false)}>No</button>
                        <button navi-element="true" onClick={() => navigate('/')}>Yes</button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
