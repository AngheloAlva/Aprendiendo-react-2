import { fireEvent, render } from '@testing-library/react'
import TodoListItem from '../../src/06-useReducer/TodoListItem'

/* eslint-disable no-undef */
describe('Test para TodoListItem', () => {
  const todo = {
    id: 1,
    description: 'Aprender React',
    done: false
  }

  const onDeleteTodo = jest.fn()
  const onToggleTodo = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('Debe de mostrar el Todo pendiente correctamente', () => {
    render(<TodoListItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)

    expect(document.querySelector('span').textContent).toBe(todo.description)
    expect(document.querySelector('span').classList.contains('text-decoration-line-through')).toBe(false)
  })

  test('Debe de mostrar el Todo Completado', () => {
    todo.done = true
    render(<TodoListItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)

    expect(document.querySelector('span').textContent).toBe(todo.description)
    expect(document.querySelector('span').classList.contains('text-decoration-line-through')).toBe(true)
  })

  test('Span debe de llamar a la función onToggleTodo', () => {
    render(<TodoListItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)

    fireEvent.click(document.querySelector('span'))

    expect(onToggleTodo).toHaveBeenCalledWith(todo.id)
  })

  test('Botón Borrar debe de llamar a la función onDeleteTodo', () => {
    render(<TodoListItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)

    fireEvent.click(document.querySelector('button'))

    expect(onDeleteTodo).toHaveBeenCalledWith(todo.id)
  })
})
