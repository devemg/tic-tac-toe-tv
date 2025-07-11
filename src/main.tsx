import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './localization'
import { HashRouter, Route, Routes } from 'react-router'
import { App } from './App'
import { GamePage, HomePage, InstructionsPage, ScoreBoardPage, PlayerNamesPage, SettingsPage } from '@pages';

try {
} catch (e) {
  console.error('[ERROR] on analytics init', e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/profiles" element={<PlayerNamesPage />} />
          <Route path="/board" element={<ScoreBoardPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
