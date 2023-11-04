import { useEffect, useReducer } from 'react'
import { todoReducer } from '../06-useReducer/todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    dispatchTodos({
      type: '[TODO] add todo',
      payload: todo
    })
  }

  const handleDeleteTodo = (todoId) => {
    dispatchTodos({
      type: '[TODO] delete todo',
      payload: todoId
    })
  }

  const handleToggleTodo = (todoId) => {
    dispatchTodos({
      type: '[TODO] toggle todo',
      payload: todoId
    })
  }

  const pendingTodosCount = todos.filter(todo => !todo.done).length

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodosCount
  }
}
