import { PlayerGame } from "../models/player-gamer"
import iconx from '../../assets/icon-x.svg';
import icono from '../../assets/icon-o.svg';
import { useState } from "react";

interface BoardProps {
    activePlayer: PlayerGame;
    togglePlayer: () => void;
}

export const Board: React.FC<BoardProps> = ({ activePlayer, togglePlayer }) => {
    const [board, setBoard] = useState<number[][]>([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);

    const markBoardCell = (x: number, y: number) => {
        if (x < 0 || x > 2) return;
        if (y < 0 || y > 2) return;
        const cell = board[x][y];
        if (cell === -1) {
            const value = activePlayer === 'p1' ? 1 : 0;
            setBoard(state => {
                state[x][y] = value;
                return [...state];
            });
            togglePlayer();
        }
    }


    return (
        <div className="board">
            {
                board.map((b, xIndex) => <div key={xIndex} className="board-row">
                    {
                        b.map((cell, yIndex) => <button key={`${xIndex}-${yIndex}`}
                            className={`cell ${cell >= 0 ? 'marked' : ''} ${activePlayer}`}
                            onClick={() => markBoardCell(xIndex, yIndex)}>
                            {cell === 0 ? <img src={icono} /> : cell === 1 ? <img src={iconx} /> : ''}
                        </button>)
                    }
                </div>)
            }
        </div>)
}
