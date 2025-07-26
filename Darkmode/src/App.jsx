
import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen ${theme === 'light' 
      ? 'bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500' 
      : 'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 text-white '}`}>

      <Form onToggleTheme={toggleTheme} />
    </div>
  )
}

export default App
