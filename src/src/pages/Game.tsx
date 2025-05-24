import { useState } from "react";
import { Players } from "../components/Players";
import { GamePlayerType } from "../models/game-player-type";
import { Board } from "../components/Board";
import { useNavigate } from "react-router";

export const Game = () => {
    const [activePlayer, setActivePlayer] = useState<GamePlayerType>('p1');
    const [winner, setWinner ] = useState<GamePlayerType|undefined|null>();
    const navigate = useNavigate();

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

    return (
        <div className="game">
            <Players active={activePlayer} />
            <div className="board-container">
                <Board activePlayer={activePlayer} winner={winner} togglePlayer={toglePlayer} manageWinner={manageWinner} />
            </div>
            {winner && <div className="winner">
                {<p>Winner: {activePlayer === 'p1' ? 'Player 1' : 'Player 2'}</p>}
                {<p>Congratulations!! </p>}
                <div className="buttons">
                    <button className="btn" onClick={() => navigate('/')}>Go Back</button>
                    <button className="btn" onClick={playAgain}>Play Again</button>
                </div>
            </div>}
            {
                winner === null && <div className="winner">
                    <p>Another game?</p>
                    <div className="buttons">
                        <button className="btn" onClick={() => navigate('/?skipSplash=true')}>Go Back</button>
                        <button className="btn" onClick={playAgain}>Play Again</button>
                    </div>
                </div>
            }
        </div>
    )
}
