import { GamePlayerType } from "@models/game-player-type";

export interface GameMatch {
    startTime: number;
    endTime: number;
    nameP1: string;
    nameP2: string;
    winner: GamePlayerType|null;
}