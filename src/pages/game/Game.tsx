import { useEffect, useRef, useState } from "react";
import { Board, Dialog } from "@components";
import { GamePlayerType } from "@models/game-player-type";
import { useNavigate } from "react-router";
import { focusContainerRef } from "@utils/focus.utils";
import { useGame } from "@context";
import styles from './game.module.scss';
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import backIcon from '@assets/arrow-left.svg';
import clsx from 'clsx';
import { pushGame, useGameStore } from "@store/Store";
import { GameMatch } from "@models/GameMatch";
import { useTranslation } from "react-i18next";

export const GamePage = () => {
    const [activePlayer, setActivePlayer] = useState<GamePlayerType>('p1');
    const [winner, setWinner] = useState<GamePlayerType | undefined | null>();
    const [showExitDialog, setshowExitDialog] = useState(false);
    const { backManager } = useGame();
    const { p1Name, p2Name } = useGameStore((state) => state);
    const navigate = useNavigate();
    const boardRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const dialogExitRef = useRef<HTMLDivElement>(null);
    const [startTime, setStartTime] = useState(Date.now());
    const { t } = useTranslation();

    const toglePlayer = () => {
        setActivePlayer(prevPlayer => prevPlayer === 'p1' ? 'p2' : 'p1');
    }

    const manageWinner = (winner: GamePlayerType | null) => {
        setWinner(winner);

        const match: GameMatch = {
            nameP1: p1Name,
            nameP2: p2Name,
            startTime: startTime,
            endTime: Date.now(),
            winner,
        }
        pushGame(match);
    }

    const playAgain = () => {
        setActivePlayer('p1');
        setStartTime(Date.now());
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
            <div className={clsx(
                        'page-header',
                        styles['page-header']
                    )}>
                <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
                <div className={styles['players']}>
                    <div className={clsx(
                        styles[activePlayer],
                        activePlayer === 'p1' && styles['active']
                    )}
                    >
                        <p>{p1Name}</p>
                        <img src={icono} alt="O" />
                    </div>
                    <div className={clsx(
                        styles[activePlayer],
                        activePlayer === 'p2' && styles['active']
                    )}>
                        <p>{p2Name}</p>
                        <img src={iconx} alt="X" />
                    </div>
                </div>
            </div>

            <div className={styles['board-container']}>
                <Board ref={boardRef} activePlayer={activePlayer} winner={winner} togglePlayer={toglePlayer} manageWinner={manageWinner} />
            </div>
            <Dialog show={!!winner || winner === null} onClose={() => { }} >
                <div className="modal">
                    {winner !== null ? <>
                        <h1>{t('game.congrats')}</h1>
                        <p>{t('game.winner')}: {activePlayer === 'p1' ? p1Name : p2Name}</p>
                    </>
                        : <p>{t('game.play-again-text')}</p>}
                    <div className="page-buttons" ref={dialogRef} navi-container="horizontal" navi-blocked="true">
                        <button navi-element="true" onClick={() => navigate('/profiles', { replace: true })}>{t('game.go-back')}</button>
                        <button navi-element="true" onClick={playAgain}>{t('game.play-again')}</button>
                    </div>
                </div>
            </Dialog>
            <Dialog show={showExitDialog} onClose={() => setshowExitDialog(false)} >
                <div className="modal">
                    <p>{t('exit-text')}</p>
                    <div className="page-buttons" ref={dialogExitRef} navi-container="horizontal" navi-blocked="true">
                        <button navi-element="true" onClick={() => setshowExitDialog(false)}>{t('no')}</button>
                        <button navi-element="true" onClick={() => navigate('/profiles', { replace: true })}>{t('yes')}</button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
