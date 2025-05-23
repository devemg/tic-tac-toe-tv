import { Splash } from "./components/Splash"
import { Game } from "./pages/Game"
import { Profiles } from "./pages/Profiles"

export const App = () => {
  return (
    <div>
      <Splash/>
      <Game/>
      {/* <Profiles/> */}
    </div>
  )
}
