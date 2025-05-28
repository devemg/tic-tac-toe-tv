import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Profiles } from './src/pages/Profiles'
import { Game } from './src/pages/Game'
import { App } from './src/App'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Profiles />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
