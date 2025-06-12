import { Outlet, useNavigate } from 'react-router'
import { manageMovement, NaviKeyboardEvent } from "@devemg/navi-lib";
import { useEffect } from 'react';
import { GameContextProvider, useGame } from '@context';
import { Splash } from '@components';


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
