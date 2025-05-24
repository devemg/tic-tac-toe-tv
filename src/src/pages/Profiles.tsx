import { useNavigate } from "react-router"

export const Profiles = () => {
  const navigate = useNavigate();
  return (
    <div className="profiles">
        <img className="profiles-logo" src="/logo.svg" alt="" />
        <div className="inputs">
            <input type="text" name="player1" placeholder="Player 1" />
            <input type="text" name="Player2" placeholder="Player 2" />
        </div>
        <div className="buttons">
            <button className="btn" onClick={()=>navigate('/game')}>Play</button>
        </div>
    </div>
  )
}
