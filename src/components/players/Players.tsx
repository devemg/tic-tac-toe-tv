import React from "react";
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import { GamePlayerType } from "@models/game-player-type";
import { useGame } from "@context";
import styles from './players.module.scss';

interface PlayerProps {
    active: GamePlayerType;
}

export const Players: React.FC<PlayerProps> = ({ active }) => {
  const { names } = useGame();
  return (
    <div className="players">
        <div className={`player ${active === 'p1' ? 'active' : ''}`}>
          <p className="p1">{names.p1}</p>
          <img src={icono} alt="O" />
        </div>
        <div className={`player ${active === 'p2' ? 'active' : ''}`}>
          <p className="p2">{names.p2}</p>
          <img src={iconx} alt="X" />
        </div>
    </div>
  )
}
