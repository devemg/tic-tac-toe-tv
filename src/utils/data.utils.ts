import { GameMatch } from "@models/GameMatch";

export const getTop3 = (gameData: GameMatch[]): { name: string; wins: number }[] => {
    const winCounts: Record<string, number> = {};
    gameData.forEach(game => {
        const winnerName = game.winner === 'p1' ? game.nameP1 : game.nameP2;
        winCounts[winnerName] = (winCounts[winnerName] || 0) + 1;
    });

    return Object.entries(winCounts)
        .map(([name, wins]) => ({ name, wins }))
        .sort((a, b) => b.wins - a.wins);
}