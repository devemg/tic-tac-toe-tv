import { GameMatch } from '@models/GameMatch';
import { create } from 'zustand';

type Store = {
  players: string[];
  history: GameMatch[];
};

export const useGameStore = create<Store>(() => ({
  players: JSON.parse(localStorage.getItem('playerNames') ?? '[]'),
  history: JSON.parse(localStorage.getItem('matches') ?? '[]'),
}));

/**
 * Push a new player name
 * App is able to save 5 player names
 * 
 * @param playerName 
 * @returns 
 */
export const pushPlayerName = (playerName: string) =>
  useGameStore.setState((state) => {
    const newPlayers = [...state.players, playerName].slice(-5);
    localStorage.setItem('playerNames', JSON.stringify(newPlayers));
    return {
      players: newPlayers,
    }
  });

/**
 * Push a new player game
 * App is able to save 5 player names
 * 
 * @param playerName 
 * @returns 
 */
export const pushGame = (game: GameMatch) =>
  useGameStore.setState((state) => {
    const newArray = [...state.history, game].slice(-5);
    localStorage.setItem('matches', JSON.stringify(newArray));
    return {
      history: newArray,
    }
  });

export const clearGames = () => {
  localStorage.setItem('matches', '[]');
  useGameStore.setState(() => ({
    history: [],
  }));
}


export const clearNames = () => {
  localStorage.setItem('playerNames', '[]');
  useGameStore.setState(() => ({
    players: [],
  }));
}