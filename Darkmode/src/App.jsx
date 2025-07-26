
import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [theme, setTheme] = useState('light')  // State to store current theme (light or dark) 

  const toggleTheme = () => {                   // Function to toggle theme on button click
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // Apply different background and text colors based on theme
  return (
    <div className={`min-h-screen ${theme === 'light' 
      ? 'bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500' 
      : 'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 text-white '}`}>

      <Form onToggleTheme={toggleTheme} />
    </div>
  )
}

export default App
