import { createContext, ReactNode, useContext } from "react";
import { GameContext } from "./game";
import { BackManager } from "./back-manager";

const backManager = new BackManager();
const defaultGame: GameContext = {
    backManager,
}
export const GContext = createContext<GameContext>(defaultGame);

export const GameContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <GContext.Provider value={{ backManager }}>
            {children}
        </GContext.Provider>
    );
}


export const useGame = () => {
    return useContext(GContext);
}
