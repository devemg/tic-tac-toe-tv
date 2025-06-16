import { Outlet, useNavigate } from 'react-router'
import { manageMovement, NaviKeyboardEvent } from "@devemg/navi-lib";
import { useEffect } from 'react';
import { GameContextProvider, useGame } from '@context';

export const App = () => {
    const navigate = useNavigate();
    const { backManager } = useGame();
    const handleKeyup = (e: KeyboardEvent) => {
        const event = e as NaviKeyboardEvent;
        event.naviBackKeys = ['XF86Back', "Insert"];//10009 // insert is for browser dev env
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
            <GameContextProvider>
                <Outlet />
            </GameContextProvider>
        </>
    )
}
