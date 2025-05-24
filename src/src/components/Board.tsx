
import iconx from '../../assets/icon-x.svg';
import icono from '../../assets/icon-o.svg';
import { PlayerGame } from "../models/player-gamer";
import { useEffect, useState } from "react";

interface BoardProps {
    activePlayer: PlayerGame;
    winner: null | PlayerGame;
    togglePlayer: () => void;
    manageWinner: (winner: PlayerGame) => void;
}

export const checkWinner = (board: number[][], playerName: PlayerGame): boolean => {
    const player = playerName === 'p1' ? 0 : 1;
    // // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }
    // // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    // No win
    return false;
}


export const Board: React.FC<BoardProps> = ({ activePlayer, winner, togglePlayer, manageWinner }) => {
    const [board, setBoard] = useState<number[][]>([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (started) {
            const ganador = checkWinner(board, activePlayer);
            if (ganador) {
                manageWinner(activePlayer);
            }
            else {
                togglePlayer();
            }
        }
    }, [board]);

    useEffect(() => {
        if (started && winner == null) {
            setBoard([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
            setStarted(false)
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
