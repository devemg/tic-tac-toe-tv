import { GamePlayerType } from "@models/game-player-type";
import { GameMatch } from "@models/GameMatch";
import { TopItem } from "@models/top-item";
import i18next from "i18next";
import { enUS, es } from 'date-fns/locale';
import { v4 as uuidv4 } from 'uuid';

export const getTop3 = (
    gameData: GameMatch[]
): TopItem[] => {
    const winCounts: Record<
        string,
        { wins: number; pl: GamePlayerType }
    > = {};
    gameData.forEach((game) => {
        if (game.winner === 'p1') {
            const name = game.nameP1;
            if (!winCounts[name]) {
                winCounts[name] = { wins: 0, pl: 'p1' };
            }
            winCounts[name].wins += 1;
        } else if (game.winner === 'p2') {
            const name = game.nameP2;
            if (!winCounts[name]) {
                winCounts[name] = { wins: 0, pl: 'p2' };
            }
            winCounts[name].wins += 1;
        }
    });
    return Object.entries(winCounts)
        .map(([name, data]) => ({ name, wins: data.wins, pl: data.pl }))
        .sort((a, b) => b.wins - a.wins)
        .slice(0, 3);
};

/**
 * Get the current locale for date nfs formating
 * 
 * @returns datenfs locale
 */
export const getDateLocale = () => {
    if (i18next.language.toLowerCase() === 'es') {
        return es;
    }
    return enUS;
}

/**
 * Get device ID from local storage
 */
export const getDeviceId = () => {
    if (!!localStorage.getItem('did')) {
        return localStorage.getItem('did');
    }
    const uid = uuidv4();
    localStorage.setItem('did', uid);
    return uid;
  }