import { BackManager } from "../context/back-manager";

export interface GamePlayerNames {
        p1: string;
        p2: string;
    }

export interface GameContext {
    names: GamePlayerNames;
    setNames: (names: GamePlayerNames) => void;
    backManager: BackManager;
}