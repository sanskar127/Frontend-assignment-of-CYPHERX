import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './context/ContextAPI.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ContextApi>
  </React.StrictMode>,
)
