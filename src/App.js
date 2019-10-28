import React, { useState } from 'react'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
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

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  }

  return (
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, index) => (
          <TodoList style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} key={index} index={index} todo={todo}/>
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App

