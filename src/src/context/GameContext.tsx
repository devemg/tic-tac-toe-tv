import { createContext, ReactNode, useContext, useState } from "react";
import { GameContext, GamePlayerNames } from "../models/game";
import { BackManager } from "./back-manager";

const backManager = new BackManager();
const defaultGame: GameContext = {
    names: {
        p1: 'Player 1',
        p2: 'Player 2',
    },
    setNames: ()=>{},
    backManager,
}
export const GContext = createContext<GameContext>(defaultGame);

export const GameContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [names, setNames] = useState<GamePlayerNames>(localStorage.getItem('pNames') ? JSON.parse(localStorage.getItem('pNames')??'{}') : defaultGame.names);
    return (
        <GContext.Provider value={{ names, setNames, backManager }}>
            {children}
        </GContext.Provider>
    );
}


export const useGame = () => {
   return useContext(GContext);
}
