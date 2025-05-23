import { useState } from "react";
import { Players } from "./Players";
import { PlayerGame } from "../models/player-gamer";
import { Board } from "./Board";

export const Game = () => {
    const [activePlayer, setActivePlayer] = useState<PlayerGame>('p1');

    const toglePlayer = () => {
        setActivePlayer(prevPlayer => prevPlayer === 'p1' ? 'p2' : 'p1');
    }

    return (
        <div className="game">
            <Players active={activePlayer} />
            <div className="board-container">
                <Board activePlayer={activePlayer} togglePlayer={toglePlayer} />
            </div>
        </div>
    )
}
