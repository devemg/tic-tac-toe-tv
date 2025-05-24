import { createContext, ReactNode, useContext, useState } from "react";
import { GameContext, GamePlayerNames } from "../models/game";

const defaultGame: GameContext = {
    names: {
        p1: 'Player 1',
        p2: 'Player 2',
    },
    setNames: ()=>{},
}


export const GContext = createContext<GameContext>(defaultGame);

export const GameContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [names, setNames] = useState<GamePlayerNames>(localStorage.getItem('pNames') ? JSON.parse(localStorage.getItem('pNames')??'{}') : defaultGame.names);
    return (
        <GContext.Provider value={{ names, setNames }}>
            {children}
        </GContext.Provider>
    );
}


export const useGame = () => {
   return useContext(GContext);
}
