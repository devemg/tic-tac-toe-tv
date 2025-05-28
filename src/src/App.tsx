import { Outlet, useNavigate } from 'react-router'
import { Splash } from './components/Splash'
import { GameContextProvider, useGame } from './context/GameContext'
import { manageMovement, NaviKeyboardEvent } from "@devemg/navi-lib";
import { useEffect } from 'react';


export const App = () => {
    const navigate = useNavigate();
    const { backManager } = useGame();
    const handleKeyup = (e: KeyboardEvent) => {
        const event = e as NaviKeyboardEvent;
        event.naviBackKeys = ['XF86Back'];//10009 //inject with info to manage in the lib
        manageMovement(event);
    }

    useEffect(() => {
        backManager.init('back', () => {
            navigate('/');
        });
        document.addEventListener('keyup', handleKeyup);
        return () => {
            document.removeEventListener('keyup', handleKeyup);
            backManager.close();
        }
    }, []);

    return (
        <>
            <Splash />
            <GameContextProvider>
                <Outlet />
            </GameContextProvider>
        </>
    )
}
