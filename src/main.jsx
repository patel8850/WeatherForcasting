import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './Context/Weather.jsx' 
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
  <WeatherProvider>
    <App />
    </WeatherProvider>
    </HashRouter>
  </StrictMode>,

)
