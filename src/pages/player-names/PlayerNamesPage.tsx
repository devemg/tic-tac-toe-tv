import { useGame } from "@context";
import { focusContainerRef } from "@utils/focus.utils";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import styles from './player-names.module.scss';
import iconx from '@assets/icon-x.svg';
import icono from '@assets/icon-o.svg';
import { GamePlayerType } from "@models/game-player-type";
import { NamesList } from "@components";


export const PlayerNamesPage = () => {
  const navigate = useNavigate();
  const [player1Options] = useState(['user 1', 'User 2', 'user 3', 'user 4', 'user 5']);
  const [player2Options] = useState(['Sara', 'Roberto']);
  const { names, setNames } = useGame();
  const [form, setForm] = useState({ p1: names.p1, p2: names.p2 });
  const buttonsRef = useRef<HTMLDivElement>(null);

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
    setNames(form);
    localStorage.setItem('pNames', JSON.stringify(form));
    navigate('/game');
  };

  const updateName = (newName: string, pl: GamePlayerType) => {
    if (pl === 'p1') {
      setForm(state=>({...state, p1: newName }));
    } else {
      setForm(state=>({...state, p2: newName }));
    }
  }

  return (
    <form className={styles['page']} navi-container="vertical" onSubmit={handleSubmit}>
      <h1>Select the game players</h1>
      <div className={styles['page-boxes']} navi-container="horizontal">
        <div>
          <img src={icono} alt="Player 1 Icon" />
          {(player1Options.length > 0 || player2Options.length > 0) && <NamesList names={player1Options} player="p1" onElementClick={updateName} />}
          <input type="text" name="p1" placeholder="Player 1" navi-element="true" onChange={handleChange} value={form.p1} />
        </div>
        <div>
          <img src={iconx} alt="Player 2 Icon" />
          {(player1Options.length > 0 || player2Options.length > 0) && <NamesList names={player2Options} player="p2" onElementClick={updateName} />}
          <input type="text" name="p2" placeholder="Player 2" navi-element="true" onChange={handleChange} value={form.p2} />
        </div>
      </div>
      <div className="page-buttons" ref={buttonsRef} navi-container="horizontal">
        <button type="submit" className="single" navi-element="true" disabled={form.p1.length === 0 || form.p2.length === 0}>Play</button>
      </div>
    </form>
  )
}
