import { useState } from "react";
import { Players } from "../components/Players";
import { PlayerGame } from "../models/player-gamer";
import { Board } from "../components/Board";

export const Game = () => {
    const [activePlayer, setActivePlayer] = useState<PlayerGame>('p1');
    const [winner, setWinner] = useState<PlayerGame | undefined | null>();

    const toglePlayer = () => {
        setActivePlayer(prevPlayer => prevPlayer === 'p1' ? 'p2' : 'p1');
    }

    const manageWinner = (winner: PlayerGame | null) => {
        setWinner(winner);
    }

    const playAgain = () => {
        setActivePlayer('p1');
        setWinner(undefined);
    }

    return (
        <div className="game">
            <Players active={activePlayer} />
            <div className="board-container">
                <Board activePlayer={activePlayer} winner={winner} togglePlayer={toglePlayer} manageWinner={manageWinner} />
            </div>
            {winner || winner === null && <div className="winner">
                {winner && <p>Winner: {activePlayer === 'p1' ? 'Player 1' : 'Player 2'}</p>}
                {winner && <p>Congratulations!! </p>}
                <div className="buttons">
                    <button className="btn">Go Back</button>
                    <button className="btn" onClick={playAgain}>Play Again</button>
                </div>
            </div>}
        </div>
    )
}
