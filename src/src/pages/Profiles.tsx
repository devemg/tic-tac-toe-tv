import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router"
import { useGame } from "../context/GameContext";

export const Profiles = () => {
  const navigate = useNavigate();
  const { names, setNames } = useGame();
  const [form, setForm] = useState({p1: names.p1, p2: names.p2});

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
    <form className="profiles" onSubmit={handleSubmit}>
        <img className="profiles-logo" src="/logo.svg" alt="" />
        <div className="inputs">
            <input type="text" name="p1" placeholder="Player 1" onChange={handleChange} value={form.p1}/>
            <input type="text" name="p2" placeholder="Player 2" onChange={handleChange} value={form.p2}/>
        </div>
        <div className="buttons">
            <button className="btn" type="submit">Play</button>
        </div>
    </form>
  )
}
