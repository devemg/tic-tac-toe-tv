import { useState } from "react";
import { Players } from "./Players";
import iconx from '../../assets/icon-x.svg';
import icono from '../../assets/icon-o.svg';

export const Game = () => {
    const [activePlayer, setActivePlayer] = useState('p1');
    const [board, setBoard] = useState<number[][]>([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);

    const markBoardCell = (x: number, y: number) => {
            if (x < 0 || x > 2) return;
            if (y < 0 || y > 2) return;
        const cell = board[x][y];
        if (cell === -1) {
            const value = activePlayer === 'p1' ? 1 : 0;
            setBoard(state=>{
                state[x][y] = value;
                return [...state];
            });
            setActivePlayer(prevPlayer => prevPlayer === 'p1' ? 'p2' : 'p1');
        }
    }



    return (
        <div className="game">
            <Players active={activePlayer} />
            <div className="board-container">
                <div className="board">
                    {
                        board.map((b, xIndex) => <div key={xIndex} className="board-row">
                            {
                                b.map((cell, yIndex) => <button key={`${xIndex}-${yIndex}`} 
                                className={`cell ${cell >= 0 ? 'marked' : ''}`}
                                onClick={() => markBoardCell(xIndex, yIndex)}>
                                    {cell === 0 ? <img src={icono} /> : cell === 1 ? <img src={iconx} /> : ''}
                                </button>)
                            }
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}
