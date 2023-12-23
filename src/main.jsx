import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiContext } from './context/ApiContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiContext>
  </React.StrictMode>,
)
