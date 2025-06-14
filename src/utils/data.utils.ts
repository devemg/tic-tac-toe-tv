import { GamePlayerType } from "@models/game-player-type";
import { GameMatch } from "@models/GameMatch";
import { TopItem } from "@models/top-item";

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