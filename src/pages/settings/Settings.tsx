import { useNavigate } from 'react-router';
import styles from './settings.module.scss';
import backIcon from '@assets/arrow-left.svg';
import { useEffect, useRef } from 'react';
import { focusContainerRef } from '@utils/focus.utils';
import { clearGames, clearNames } from '@store/Store';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const optionsRef = useRef(null);

  useEffect(() => {
    focusContainerRef(optionsRef);
  }, []);

  const clearPlayers = () => {
    clearNames();
  }

  const clearHistory = () => {
    clearGames();
  }

  return (
    <div className={styles['page']}>
      <h2 className="page-header">
        <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
      </h2>
      <div className={styles['page-section']} navi-container="vertical" navi-default="true" ref={optionsRef}>
        <h1>Settings</h1>
        <div className={styles['page-section-item']} navi-element="true" tabIndex={0}>
          <p>Language</p>
          <p>English</p>
        </div>

        <div className={styles['page-section-item']} navi-element="true" tabIndex={0} onClick={clearPlayers}>
          <p>Clear Players History</p>
        </div>
        <div className={styles['page-section-item']} navi-element="true" tabIndex={0} onClick={clearHistory}>
          <p>Clear Games History</p>
        </div>
      </div>

      <div className={styles['page-footer']}>
        <p>Tic Tac Toe</p>
        <p>v.0.0.0</p>
      </div>
    </div>
  )
}
