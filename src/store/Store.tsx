import { GameMatch } from '@models/GameMatch';
import { create } from 'zustand';

type Store = {
  players: string[];
  history: GameMatch[];
  p1Name: string;
  p2Name: string;
};

export const useGameStore = create<Store>(() => ({
  players: JSON.parse(localStorage.getItem('playerNames') ?? '[]'),
  history: JSON.parse(localStorage.getItem('matches') ?? '[]'),
  p1Name: localStorage.getItem('p1Name') ?? '',
  p2Name: localStorage.getItem('p2Name') ?? '',
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

/**
 * Update player names
 *
 * @param name1 
 * @param name2 
 */
export const updateNames = ({ p1, p2 }: {p1: string, p2: string}) => {
  useGameStore.setState(() => ({
    p1Name: p1,
    p2Name: p2
  }));
}

export const clearGames = () => {
  localStorage.setItem('matches', '[]');
  useGameStore.setState(() => ({
    history: [],
  }));
}


export const clearNames = () => {
  localStorage.setItem('playerNames', '[]');
  localStorage.removeItem('p1Name');
  localStorage.removeItem('p2Name');
  useGameStore.setState(() => ({
    players: [],
    p1Name: '',
    p2Name: '',
  }));
}