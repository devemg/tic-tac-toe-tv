import { GamePlayerType } from "@models/game-player-type";

export interface TopItem { 
    name: string; 
    wins: number; 
    pl: GamePlayerType;
}