import React from "react";
import iconx from '../../assets/icon-x.svg';
import icono from '../../assets/icon-o.svg';
import { PlayerGame } from "../models/player-gamer";

interface PlayerProps {
    active: PlayerGame;
}

export const Players: React.FC<PlayerProps> = ({ active }) => {
  return (
    <div className="players">
        <div className={`player ${active === 'p1' ? 'active' : ''}`}>
          <p className="p1">Player 1</p>
          <img src={iconx} alt="X" />
        </div>
        <div className={`player ${active === 'p2' ? 'active' : ''}`}>
          <p className="p2">Player 2</p>
          <img src={icono} alt="O" />
        </div>
    </div>
  )
}
