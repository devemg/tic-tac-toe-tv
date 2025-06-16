import styles from './instructions.module.scss';
import ideaIcon from '@assets/idea.svg';
import arrowLeftIcon from '@assets/arrow-left.svg';
import chessIcon from '@assets/chess.svg';
import gamepadIcon from '@assets/gamepad.svg';
import tvIcon from '@assets/tv.svg';
import circleIcon from '@assets/circle.svg';
import backIcon from '@assets/arrow-left.svg';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const InstructionsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles['page']}>
      <div className="page-header">
        <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
      </div>
      <div className={styles['page-section']}>
        <div className={styles['page-overview']}>
          <h1 className={styles['primary-text']}>{t('inst.overview')}</h1>
          <p>{t('inst.description')}</p>
          <div className={styles['page-note']}>
            <img src={ideaIcon} alt="Idea" />
            <div>
              <h4>{t('inst.quick-tip')}</h4>
              <p>{t('inst.quick-tip-description')}</p>
            </div>
          </div>
      </div>
      <h2 className={styles['accent-text']}>{t('inst.game-rules')}</h2>
      <div className={styles['page-rules']}>
        <div>
          <span className={styles['primary']}>1</span>
          <h3>{t('inst.take-turns')}</h3>
          <p>{t('inst.take-turns-description')}</p>
        </div>
        <div>
          <span className={styles['accent']}>2</span>
          <h3>{t('inst.three-row')}</h3>
          <p>{t('inst.three-row-description')}</p>
        </div>
        <div>
          <span className={styles['primary']}>3</span>
          <h3>{t('inst.draw-game')}</h3>
          <p>{t('inst.draw-game-description')}</p>
        </div>
      </div>
      <h2 className={styles['primary-text']}>{t('inst.winning-patterns')}</h2>
      <div className={styles['page-winning']}>
        <div>
          <h3>{t('inst.vertical')}</h3>
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
          <h3>{t('inst.horizontal')}</h3>
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
          <h3>{t('inst.diagonal')}</h3>
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
          <h3>{t('inst.diagonal')}</h3>
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
          <h3 className={styles['accent-text']}><img src={tvIcon} alt="Gamepad" /> {t('inst.tv-controls')}</h3>
          <div className={styles['page-config-item']}>
            <img src={gamepadIcon} alt="Gamepad" />
            <div>
              <h4>{t('inst.arrow-controls')}</h4>
              <p>{t('inst.arrow-controls-description')}</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <img src={circleIcon} alt="" />
            <div>
              <h4>{t('inst.selection-button')}</h4>
              <p>{t('inst.selection-button-description')}</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <img src={arrowLeftIcon} alt="" />
            <div>
              <h4>{t('inst.back-button')}</h4>
              <p>{t('inst.back-button-description')}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles['primary-text']}><img src={chessIcon} alt="Gamepad" /> Strategy Tips</h3>
          <div className={styles['page-config-item']}>
            <span>1</span>
            <div >
              <h4>{t('inst.control-center')}</h4>
              <p>{t('inst.control-center-description')}</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>2</span>
            <div>
              <h4>{t('inst.block')}</h4>
              <p>{t('inst.block-description')}</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>3</span>
            <div>
              <h4>{t('inst.forks')}</h4>
              <p>{t('inst.forks-description')}</p>
            </div>
          </div>

          <div className={styles['page-config-item']}>
            <span>4</span>
            <div>
              <h4>{t('inst.corner')}</h4>
              <p>{t('inst.corner-description')}</p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}
