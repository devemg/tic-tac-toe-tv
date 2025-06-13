import { GamePlayerType } from "@models/game-player-type";

export interface GameMatch {
    startTime: Date;
    endTime?: Date;
    nameP1: string;
    nameP2: string;
    winner?: GamePlayerType;
}