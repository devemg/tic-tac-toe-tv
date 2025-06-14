import { useNavigate } from 'react-router';
import styles from './settings.module.scss';
import backIcon from '@assets/arrow-left.svg';

export const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['page']}>
      <h2 className="page-header">
        <img src={backIcon} alt="Left Arrow" onClick={()=>navigate('/')} />
      </h2>
      <div className={styles['page-section']} navi-container="vertical" navi-default="true">
        <h1>Settings</h1>
        <div className={styles['page-section-item']} navi-element="true" tabIndex={0}>
          <p>Language</p>
          <p>English</p>
        </div>

        <div className={styles['page-section-item']} navi-element="true" tabIndex={0}>
          <p>Clear Players History</p>
        </div>
        <div className={styles['page-section-item']} navi-element="true" tabIndex={0}>
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
