import React, {useState} from 'react'
import './App.css'

const TodoForm = ({ addTodo}) => {
  const [ value, setValue ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={e => setValue(e.target.value) } />
      </form>
    </div>
  )
}

export default TodoForm
