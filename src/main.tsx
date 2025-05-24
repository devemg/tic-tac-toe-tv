import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Game } from './src/pages/Game'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
