
import iconx from '../../assets/icon-x.svg';
import icono from '../../assets/icon-o.svg';
import { PlayerGame } from "../models/player-gamer";
import { useEffect, useState } from "react";
import { checkBoardFilled, checkWinner } from '../utils/utils';
import { WinnerMovement } from '../models/winner-movement';

interface BoardProps {
    activePlayer: PlayerGame;
    winner: undefined | null | PlayerGame;
    togglePlayer: () => void;
    manageWinner: (winner: PlayerGame | null) => void;
}

export const Board: React.FC<BoardProps> = ({ activePlayer, winner, togglePlayer, manageWinner }) => {
    const [board, setBoard] = useState<number[][]>([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
    const [started, setStarted] = useState(false);
    const [winnerui, setWinnerui] = useState<{movement: WinnerMovement; value: number}>();

    useEffect(() => {
        if (started) {
            const winner = checkWinner(board, activePlayer);
            if (winner) {
                setWinnerui(winner);
                setTimeout(() => {
                manageWinner(activePlayer);
                }, 2000);
            }
            else if (checkBoardFilled(board)) {
                manageWinner(null);
            }
            else {
                togglePlayer();
            }
        }
    }, [board]);

    useEffect(() => {
        if (started && winner == undefined && winner !== null) {
            setBoard([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
            setStarted(false);
            setWinnerui(undefined);
        }
    }, [winner]);

    const markBoardCell = (x: number, y: number) => {
        if (x < 0 || x > 2) return;
        if (y < 0 || y > 2) return;
        if (!started) setStarted(true);
        const cell = board[x][y];
        if (cell === -1) {
            const value = activePlayer === 'p1' ? 0 : 1;
            setBoard(state => {
                state[x][y] = value;
                return [...state];
            });
        }
    }

    return (
        <div className="board">
            { winnerui && winnerui.movement === 'column' && winnerui.value === 0 && <span className={`board-column-line line-1 ${activePlayer}`}></span>}
            { winnerui && winnerui.movement === 'column' && winnerui.value === 1 && <span className={`board-column-line line-2 ${activePlayer}`}></span>}
            { winnerui && winnerui.movement === 'column' && winnerui.value === 2 && <span className={`board-column-line line-3 ${activePlayer}`}></span>}

            { winnerui && winnerui.movement === 'diagonal' && winnerui.value === 1 && <span className={`board-column-line diagonal-1 ${activePlayer}`}></span>}
            { winnerui && winnerui.movement === 'diagonal' && winnerui.value === 2 && <span className={`board-column-line diagonal-2 ${activePlayer}`}></span>}
            {
                board.map((b, xIndex) => <div key={xIndex} className="board-row">
                    { winnerui && winnerui.movement === 'row' && winnerui.value == xIndex && <span className={`board-row-line ${activePlayer}`}></span>}
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
