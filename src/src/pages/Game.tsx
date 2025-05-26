import { useEffect, useRef, useState } from "react";
import { Players } from "../components/Players";
import { GamePlayerType } from "../models/game-player-type";
import { Board } from "../components/Board";
import { useNavigate } from "react-router";
import { focusContainerRef } from "../utils/focus.utils";

export const Game = () => {
    const [activePlayer, setActivePlayer] = useState<GamePlayerType>('p1');
    const [winner, setWinner] = useState<GamePlayerType | undefined | null>();
    const navigate = useNavigate();
    const boardRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

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
        }
    }, [winner]);

    return (
        <div className="game">
            <Players active={activePlayer} />
            <div className="board-container">
                <Board ref={boardRef} activePlayer={activePlayer} winner={winner} togglePlayer={toglePlayer} manageWinner={manageWinner} />
            </div>
            {(winner || winner === null) && <div className="winner">
                {winner !== null ? <>
                    <p>Winner: {activePlayer === 'p1' ? 'Player 1' : 'Player 2'}</p>
                    <p>Congratulations!! </p>
                </>
                    : <p>Another game?</p>}
                <div className="buttons" ref={dialogRef} navi-container="horizontal" navi-blocked="true">
                    <button className="btn" navi-element="true" onClick={() => navigate('/')}>Go Back</button>
                    <button className="btn" navi-element="true" onClick={playAgain}>Play Again</button>
                </div>
            </div>}
        </div>
    )
}
