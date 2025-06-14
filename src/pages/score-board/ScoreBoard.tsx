import styles from './score-board.module.scss';
import { getTop3 } from '@utils/data.utils';
import medal1 from '@assets/medals/mdi_medal_gold.svg';
import medal2 from '@assets/medals/mdi_medal_silver.svg';
import medal3 from '@assets/medals/mdi_medal_bronze.svg';
import deleteIcon from '@assets/delete.svg';
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import backIcon from '@assets/arrow-left.svg';
import { clear, useGameStore } from '@store/Store';
import { useNavigate } from 'react-router';

export const ScoreBoardPage = () => {
  const gameMatches = useGameStore((state) => state.history);
  const navigate = useNavigate();

  const clearHistory = () => {
    clear();
  }

  return (
    <div className={styles['page']}>
      <h2 className="page-header">
        <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
        Score Board
      </h2>
      <div className={styles['page-section']}>
        <div className={styles['page-row']}>
        <div className={styles['page-winners']}>
          {
            getTop3(gameMatches).map((el, index) => <p key={el.name}>
              <img src={index === 0 ? medal1 : index === 1 ? medal2 : medal3} alt="medal" />
              {el.name}</p>)
          }
        </div>
        <div className={styles['page-matches']}>
          {
            gameMatches.map((match) => <div key={match.startTime}>
              <div className={styles['match-left']}>
                <img className={styles[match.winner ?? '']} src={match.winner === 'p1' ? iconx : icono} alt="medal" />
                <div>
                  <p>{match.nameP1} vs. {match.nameP2}</p>
                  <span>{Date.now() - match.startTime} ago</span>
                </div>
              </div>
              <div>
                <p className={styles[match.winner ?? '']}>{!match.winner ? 'Draw Game' : match.winner === 'p1' ? match.nameP1 : match.nameP2} {match.winner && 'won!'}</p>
                {match.endTime && <span>Duration: {match.endTime - match.startTime} s</span>}
              </div>
            </div>)
          }
        </div>
      </div>
      {gameMatches.length == 0 && <h1 className={styles['page-empty']}>The board is empty, but not for long. Will it be you?</h1>}
      <div className="page-buttons" navi-container="horizontal">
        {gameMatches.length > 0 ? <button navi-element="true" onClick={clearHistory}>
          <img src={deleteIcon} alt="Delete" />
          Clear History</button> :
          <button navi-element="true" onClick={() => navigate('/profiles')}>Start Game</button>
        }
      </div>
      </div>
    </div>
  )
}
