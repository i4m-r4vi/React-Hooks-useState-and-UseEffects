import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Effects from './effects.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Effects />
  </StrictMode>,
)
