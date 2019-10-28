import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos ] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ])


  return (
    <div>
      
    </div>
  )
}

export default App

