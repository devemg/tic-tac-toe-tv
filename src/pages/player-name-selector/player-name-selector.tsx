import { useGame } from "@context";
import { focusContainerRef } from "@utils/focus.utils";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"

export const PlayerNameSelector = () => {
  const navigate = useNavigate();
  const { names, setNames } = useGame();
  const [form, setForm] = useState({p1: names.p1, p2: names.p2});
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
    setNames(form);
    localStorage.setItem('pNames', JSON.stringify(form));
    navigate('/game');
  };

  return (
    <form className="profiles" navi-container="vertical" onSubmit={handleSubmit}>
        <img className="profiles-logo" src="/logo.svg" alt="" />
        <div className="inputs" navi-container="horizontal">
            <input type="text" name="p1" placeholder="Player 1" navi-element="true" onChange={handleChange} value={form.p1}/>
            <input type="text" name="p2" placeholder="Player 2" navi-element="true" onChange={handleChange} value={form.p2}/>
        </div>
        <div ref={buttonsRef} className="buttons" navi-container="horizontal">
            <button className="btn" type="submit" navi-element="true">Play</button>
        </div>
    </form>
  )
}
