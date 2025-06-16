import { focusContainerRef } from "@utils/focus.utils";
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import styles from './player-names.module.scss';
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import backIcon from '@assets/arrow-left.svg';
import { GamePlayerType } from "@models/game-player-type";
import { NamesList } from "@components";
import { useGameStore, pushPlayerName, updateNames } from "@store/Store";
import { useTranslation } from "react-i18next";


export const PlayerNamesPage = () => {
  const navigate = useNavigate();
  const { p1Name, p2Name, players:playerOptNames } = useGameStore((state) => state);
  const { t } = useTranslation();
  const [form, setForm] = useState({ p1: p1Name != '' ? p1Name : t('player-1'), p2: p2Name != '' ? p2Name : t('player-2') });
  const buttonsRef = useRef<HTMLDivElement>(null);
  const inputP1Ref = useRef<HTMLInputElement>(null);
  const inputP2Ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusContainerRef(buttonsRef);
  }, []);

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (!target) return;
    const name = target.name;
    const value = target.value;
    setForm((state: any) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (form.p1.length === 0 || form.p2.length === 0) return;
    if (!playerOptNames.includes(form.p1.toLowerCase())) {
      pushPlayerName(form.p1.toLowerCase());
    }
    if (!playerOptNames.includes(form.p2.toLowerCase())) {
      pushPlayerName(form.p2.toLowerCase());
    }
    localStorage.setItem('p1Name', form.p1);
    localStorage.setItem('p2Name', form.p2);
    updateNames(form);
    navigate('/game');
  };

  const updateName = (newName: string, pl: GamePlayerType) => {
    if (pl === 'p1') {
      setForm(state => ({ ...state, p1: newName }));
      inputP1Ref.current?.focus();
    } else {
      setForm(state => ({ ...state, p2: newName }));
      inputP2Ref.current?.focus();
    }
  }

  const manageFormKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === 'Select') {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT') {
        event.preventDefault();
      }
    }
  }

  return (
    <div className={styles['page']}>
      <h1 className="page-header">
        <img src={backIcon} alt="Left Arrow" onClick={() => navigate('/')} />
        {t('names.title')}
      </h1>
      <form navi-container="vertical" onSubmit={handleSubmit} onKeyDown={manageFormKeyDown}>
        <h2>{t('names.selection')}</h2>
        <div className={styles['page-boxes']} navi-container="horizontal">
          <div className={styles['page-boxes-names']} navi-container="vertical">
            <img src={icono} alt="Player 1 Icon" />
            <NamesList names={playerOptNames.filter(name => name !== form.p1.toLowerCase() && name !== form.p2.toLowerCase())} player="p1" onElementClick={updateName} />
            <input type="text" name="p1" placeholder={t('player-1')} navi-element="true" ref={inputP1Ref}
              onChange={handleChange} value={form.p1} />
          </div>
          <div className={styles['page-boxes-names']} navi-container="vertical">
            <img src={iconx} alt="Player 2 Icon" />
            <NamesList names={playerOptNames.filter(name => name !== form.p1.toLowerCase() && name !== form.p2.toLowerCase())} player="p2" onElementClick={updateName} />
            <input type="text" name="p2" placeholder={t('player-2')} navi-element="true" ref={inputP2Ref}
              onChange={handleChange} value={form.p2} />
          </div>
        </div>
        <div className="page-buttons" ref={buttonsRef} navi-container="horizontal" navi-default="true">
          <button type="submit" className="single" navi-element="true" disabled={form.p1.length === 0 || form.p2.length === 0 || form.p1.toLowerCase() === form.p2.toLowerCase()}
          >{t('names.play')}</button>
        </div>
      </form>
    </div>
  );
}
