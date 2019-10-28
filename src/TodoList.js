import React from 'react'

const TodoList = ({ todo, index, completeTodo}) => {
  return (
    <div 
    className="todo"
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

export default TodoList
