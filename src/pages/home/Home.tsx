import { useNavigate } from "react-router"
import styles from './home.module.scss';
import newgame from '@assets/gamepad.svg';
import board from '@assets/podium-winner.svg';
// import question from '@assets/question.svg';
// import gear from '@assets/gear.svg';

export const HomePage = () =>  {
  const navigate = useNavigate();
  return (
    <div className={styles['page']}>
        <div className={styles['page-logo']}>
          <img src="/logo.svg" alt="" />
          <h1>Tic Tac Toe</h1>
        </div>
        <p>Challenge a friend in the classic game of strategy and fun!</p>
        <div className={styles['page-boxes']}>
          <button onClick={()=>navigate('/profiles')}>
            <img src={newgame} alt="Gamepad" />
            New Game
          </button>
          <button onClick={()=>navigate('/board')}>
            <img src={board} alt="Winner Podium" />
            Leaderboard
          </button>
        </div>
        {/* <div className="page-buttons">
          <button onClick={()=>navigate('/instructions')}>
            <img src={question} alt="Question" />
            How to play?
          </button>
          <button onClick={()=>navigate('/settings')}>
            <img src={gear} alt="Gear" />
            Settings
          </button>
        </div> */}
    </div>
  )
}
