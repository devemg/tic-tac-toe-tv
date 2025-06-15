import { useNavigate } from 'react-router';
import styles from './settings.module.scss';
import backIcon from '@assets/arrow-left.svg';
import infoIcon from '@assets/info.svg';
import { useEffect, useRef, useState } from 'react';
import { focusContainerRef } from '@utils/focus.utils';
import { clearGames, clearNames } from '@store/Store';
import { clsx } from 'clsx';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const [showInfoMessage, setShowInfoMessage] = useState<boolean>();
  const [infoMessage, setInfoMessage] = useState<string>('');
  useEffect(() => {
    focusContainerRef(optionsRef);
  }, []);

  const clearPlayers = () => {
    clearNames();
    showMessage('The player suggestions has been removed.');
  }

  const clearHistory = () => {
    clearGames();
    showMessage('The player history has been removed.');
  }

  const showMessage = (message: string) => {
    setShowInfoMessage(true);
    setInfoMessage(message);
    setTimeout(() => {
      setShowInfoMessage(false);
    }, 3000);

  }

  return (
    <div className={styles['page']}>

      <div className={clsx(
        styles['page-info'],
        showInfoMessage ? styles['show'] : styles['hide']
      )}>
        <img src={infoIcon} alt="Info" />
        <p>{infoMessage}</p>
      </div>

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
