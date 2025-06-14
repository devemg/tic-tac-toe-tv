import { create } from 'zustand';

type Store = {
  players: string[];
};

export const useGameStore = create<Store>(() => ({
  players: JSON.parse(localStorage.getItem('playerNames')?? '[]'),
}));

export const pushPlayerName = (playerName: string) =>
  useGameStore.setState((state) => {
    const newPlayers = [...state.players.slice(0, 4), playerName];
    localStorage.setItem('playerNames', JSON.stringify(newPlayers));
    return {
      players: newPlayers,
    }
  });