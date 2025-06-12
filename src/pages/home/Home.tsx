import { useNavigate } from "react-router"

export const HomePage = () =>  {
  const navigate = useNavigate();
  return (
    <div>
        <img className="profiles-logo" src="/logo.svg" alt="" />
        <h1>Tic Tac Toe</h1>
        <p>Challenge a friend or take on the AI in the classic game of strategy and fun!</p>
        <div>
          <button onClick={()=>navigate('/profiles')}>
            New Game
          </button>
          <button onClick={()=>navigate('/board')}>
            Leaderboard
          </button>
        </div>
    </div>
  )
}
