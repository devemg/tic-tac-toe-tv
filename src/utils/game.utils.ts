import { GamePlayerType } from "@models/game-player-type";
import { WinnerMovement } from "@models/winner-movement";

/**
 * Check board for winner conditions
 *
 * @param board Board
 * @param playerName p1 or p2
 * @returns if the player won and the kind of winner movement
 * The winner movement can be a row, a column or a diagonal
 */

export const checkWinner = (board: number[][], playerName: GamePlayerType): { movement: WinnerMovement, value: number } | null => {
    const player = playerName === 'p1' ? 0 : 1;
    // // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return { movement: 'row', value: i };
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return { movement: 'column', value: j };
        }
    }
    // // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return { movement: 'diagonal', value: 1 };
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return { movement: 'diagonal', value: 2 };
    }
    // No win
    return null;
}

/**
 *  Check if the board is filled
 */
export const checkBoardFilled = (board: number[][]) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === -1) {
                return false;
            }
            
        }
        
    }
    return true;
}
/**
 * get a random start player 
 * 
 * @returns 
 */
export const getRandomPlayer = (): GamePlayerType => {
    return Math.random() < 0.5 ? 'p1' : 'p2';
}