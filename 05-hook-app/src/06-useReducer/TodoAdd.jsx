import { useState } from 'react'

/* eslint-disable react/prop-types */
const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    setDescription('')
    onNewTodo(newTodo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='description'
        placeholder='Todo description...'
        autoComplete='off'
        className='form-control'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        type='submit'
        className='btn btn-outline-info mt-1 btn-block'
      >
        Agregar
      </button>
    </form>
  )
}

export default TodoAdd
