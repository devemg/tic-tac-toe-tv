import { useState } from 'react';
import styles from './leader-board.module.scss';
import { GameMatch } from '@models/GameMatch';
import { getTop3 } from '@utils/data.utils';
import medal1 from '@assets/medals/mdi_medal_gold.svg';
import medal2 from '@assets/medals/mdi_medal_silver.svg';
import medal3 from '@assets/medals/mdi_medal_bronze.svg';
import deleteIcon from '@assets/delete.svg';

export const LeaderBoardPage = () => {
  const [gameMatches, setGameMatches] = useState<GameMatch[]>([
    {
      startTime: new Date(),
      nameP1: 'emely',
      nameP2: 'sara',
      winner: 'p1',
      endTime: new Date(),
    },
    {
      startTime: new Date(),
      nameP1: 'emely',
      nameP2: 'sara',
      winner: 'p1',
      endTime: new Date(),
    },
    {
      startTime: new Date(),
      nameP1: 'sara',
      nameP2: 'roberto',
      winner: 'p2',
      endTime: new Date(),
    },
    {
      startTime: new Date(),
      nameP1: 'sara',
      nameP2: 'emely',
      winner: 'p1',
      endTime: new Date(),
    },
    {
      startTime: new Date(),
      nameP1: 'sara',
      nameP2: 'emely',
      winner: 'p1',
      endTime: new Date(),
    },
  ]);
  
  return (
    <div className={styles['page']}>
      
      <div className={styles['page-header']}>
      <img src="/logo.svg" alt="TTT" /> <h1>Tic Tac Toe</h1>
      </div>
      <div className={styles['page-section']}>
        <div className={styles['page-winners']}>
          {
          getTop3(gameMatches).map((el, index)=><p key={el.name}>
            <img src={index === 0 ? medal1 : index === 1 ? medal2 : medal3} alt="medal" />
            {el.name}</p>)
        }
        </div>
        <div className={styles['page-matches']}>
          {
            gameMatches.map((match)=><div key={match.startTime.toISOString()}>
              <div >
                <p>{match.nameP1} vs. {match.nameP2}</p>
                <span>{Date.now() - match.startTime.getTime()} ago</span>
              </div>
              <div>
                <p>{match.winner === 'p1' ? match.nameP1 : match.nameP2} won!</p>
                {match.endTime && <span>Duration: {match.endTime.getTime() - match.startTime.getTime()} s</span>}
              </div>
            </div>)
          }
        </div>
      </div>
      <div className="page-buttons" navi-container="horizontal">
        <button navi-element="true">
          <img src={deleteIcon} alt="Delete" />
          Clear History</button>
      </div>
    </div>
  )
}
