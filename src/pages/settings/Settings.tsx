import styles from './settings.module.scss';

export const SettingsPage = () => {
  return (
    <div className={styles['page']}>
      <div className={styles['page-section']}>
        <h1>Settings</h1>
        <div className={styles['page-section-item']}>
          <p>Language</p>
          <p>English</p>
        </div>
      </div>
      
        <div className='page-buttons'>
          <button>About Game</button>
        </div>
    </div>
  )
}
