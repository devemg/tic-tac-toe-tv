import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter, Route, Routes } from 'react-router'
import { Profiles } from './src/pages/Profiles'
import { Game } from './src/pages/Game'
import { App } from './src/App'
import HomePage from './src/pages/Home'
import { LeaderBoard } from './src/pages/LeaderBoard'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/board" element={<LeaderBoard />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
