import { useContext } from 'react'
import { AxiosDataContext } from './context/ContextAPI'
import './App.css'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import { backlog } from './components/Icons'
import Ticket from './components/Ticket'

function App() {
  const { theme } = useTheme()
  const apiData = useContext(AxiosDataContext)
  return (
    <div className={`App theme-${theme}`}>
      <Navbar />
      <Ticket/>
    </div>
  )
}

export default App
