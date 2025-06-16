import { useNavigate } from 'react-router';
import styles from './settings.module.scss';
import backIcon from '@assets/arrow-left.svg';
import infoIcon from '@assets/info.svg';
import { useEffect, useRef, useState } from 'react';
import { focusContainerRef } from '@utils/focus.utils';
import { clearGames, clearNames } from '@store/Store';
import { clsx } from 'clsx';
import { getAppVersion } from '@utils/tizen.utils';
import { Dialog } from '@components';
import { LanguageOption, languageOptions, supportedLanguages } from '@models/language';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const [showExitDialog, setshowExitDialog] = useState(false);
  const [showInfoMessage, setShowInfoMessage] = useState<boolean>();
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [version, setVersion] = useState('0.0.0');
  const [lang, setLang] = useState<LanguageOption>({ language: supportedLanguages[i18next.language], code: i18next.language });
  const dialogRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();


  useEffect(() => {
    setVersion(getAppVersion());
    focusContainerRef(optionsRef);
  }, []);

  useEffect(() => {
    if (showExitDialog) {
      focusContainerRef(dialogRef);
    } else {
      focusContainerRef(optionsRef);
    }
  }, [showExitDialog]);

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

  const showLanguages = () => {
    setshowExitDialog(true);
  }

  const selectLanguage = (lang: LanguageOption) => {
    setLang(lang);
    i18next.changeLanguage(lang.code); // Update language in i18next
    setshowExitDialog(false);
  }

  return (
    <>
      <div className={styles['page']}>
        <div className={clsx(
          styles['page-info'],
          showInfoMessage ? styles['show'] : styles['hide']
        )}>
          <img src={infoIcon} alt="Info" />
          <p>{infoMessage}</p>
        </div>
        <h1 className="page-header">
          <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
          {t('settings.title')}
        </h1>
        <div className={styles['page-section']} navi-container="vertical" navi-default="true" ref={optionsRef}>
          <div className={styles['page-section-item']} navi-element="true" tabIndex={0} onClick={showLanguages}>
            <h2>{t('settings.language')}</h2>
            <p>{lang.language}</p>
          </div>

          <div className={styles['page-section-item']} navi-element="true" tabIndex={0} onClick={clearPlayers}>
            <h2>{t('settings.clear-players')}</h2>
            <p>{t('settings.clear-players-description')}</p>
          </div>
          <div className={styles['page-section-item']} navi-element="true" tabIndex={0} onClick={clearHistory}>
            <h2>{t('settings.clear-history')}</h2>
            <p>{t('settings.clear-history-description')}</p>
          </div>
        </div>

        <div className={styles['page-footer']}>
          <p>v{version}</p>
        </div>
      </div>
      <Dialog show={showExitDialog} onClose={() => setshowExitDialog(false)} >
        <div className="modal">
          <div className={clsx(styles['page-section'], styles['page-section-lang'])} ref={dialogRef} navi-container="vertical" navi-blocked="true">
            <h2 className={styles['page-section-title']}>{t('settings.select-lang')}</h2>
            {languageOptions.map(lang => <button key={lang.code} navi-element="true" onClick={() => selectLanguage(lang)}
              className={styles['page-section-item']}>{lang.language}</button>)}
          </div>
        </div>
      </Dialog>
    </>
  )
}
