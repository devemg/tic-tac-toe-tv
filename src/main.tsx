import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { HashRouter, Route, Routes } from 'react-router'
import { App } from './App'
import { GamePage, HomePage, LeaderBoard, PlayerNameSelector } from '@pages';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/profiles" element={<PlayerNameSelector />} />
          <Route path="/board" element={<LeaderBoard />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
