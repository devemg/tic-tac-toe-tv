import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Profiles } from './src/pages/Profiles'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Game } from './src/pages/Game'
import { GameContextProvider } from './src/context/GameContext'
import { Splash } from './src/components/Splash'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash/>
    <GameContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </GameContextProvider>
  </StrictMode>,
)
