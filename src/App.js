import React, { useState } from 'react'

import TodoList from './TodoList'
import './App.css'

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
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoList key={index} index={index} todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default App

