import styles from './instructions.module.scss';
import ideaIcon from '@assets/idea.svg';
import arrowLeftIcon from '@assets/arrow-left.svg';
import chessIcon from '@assets/chess.svg';
import gamepadIcon from '@assets/gamepad.svg';
import tvIcon from '@assets/tv.svg';
import circleIcon from '@assets/circle.svg';

export const InstructionsPage = () => {
  return (
    <div className={styles['page']}>
      <div className={styles['page-overview']}>
          <h2 className={styles['primary-text']}>Game Overview</h2>
          <p>Tic Tac Toe is a classic strategy game played on a 3×3 grid. Two players take turns marking spaces with their symbols (X and O). The first player to get three of their marks in a row wins!</p>
          <div className={styles['page-note']}>
            <img src={ideaIcon} alt="Idea" />
            <div>
              <h3>Quick Tip</h3>
              <p>Control the center square for better winning chances!</p>
            </div>
          </div>
      </div>
      <h2 className={styles['accent-text']}>Game Rules</h2>
      <div className={styles['page-rules']}>
        <div>
          <span className={styles['primary']}>1</span>
          <h3>Take Turns</h3>
          <p>Players alternate placing their marks (X or O) on empty squares of the 3×3 grid.</p>
        </div>
        <div>
          <span className={styles['accent']}>2</span>
          <h3>Get Three in a Row</h3>
          <p>Win by getting three of your marks in a row - horizontally, vertically, or diagonally.</p>
        </div>
        <div>
          <span className={styles['primary']}>3</span>
          <h3>Draw Game</h3>
          <p>If all squares are filled and no player has three in a row, the game ends in a draw.</p>
        </div>
      </div>
      <h2 className={styles['primary-text']}>Winning Patterns</h2>
      <div className={styles['page-winning']}>
        <div>
          <h3>Vertical</h3>
          <div className={styles['page-board']}>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <h3>Horizontal</h3>
          <div className={styles['page-board']}>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div className={styles['marked']}></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <h3>Diagonal</h3>
          <div className={styles['page-board']}>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
          </div>
        </div>

        <div>
          <h3>Diagonal</h3>
          <div className={styles['page-board']}>
            <div></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div className={styles['marked']}></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
      <h2></h2>
      <div className={styles['page-config']}>
        <div>
          <h3 className={styles['accent-text']}><img src={tvIcon} alt="Gamepad" /> Smart TV Controls</h3>
          <div className={styles['page-config-item']}>
            <img src={gamepadIcon} alt="Gamepad" />
            <div>
              <h4>Arrow Keys</h4>
              <p>Navigate the game board with the control arrows.</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <img src={circleIcon} alt="" />
            <div>
              <h4>OK/Selection Button</h4>
              <p>Place your mark on selected square.</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <img src={arrowLeftIcon} alt="" />
            <div>
              <h4>Back Button</h4>
              <p>Return to previous menu.</p>
            </div>
          </div>
        </div>


        <div>
          <h3 className={styles['primary-text']}><img src={chessIcon} alt="Gamepad" /> Strategy Tips</h3>
          <div className={styles['page-config-item']}>
            <span>1</span>
            <div >
              <h4>Control the Center</h4>
              <p>The center square gives you the most winning opportunities.</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>2</span>
            <div>
              <h4>Block Your Opponent</h4>
              <p>Always prevent your opponent from getting three in a row.</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>3</span>
            <div>
              <h4>Create Forks</h4>
              <p>Set up multiple winning opportunities at once.</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>4</span>
            <div>
              <h4>Corner Strategy</h4>
              <p>Corners are the second-best positions after the center.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
