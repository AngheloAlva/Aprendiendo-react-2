/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import TodoApp from '../../src/06-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

describe('Test en el componente TodoApp', () => {
  useTodo.mockReturnValue({
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    pendingTodosCount: 0,
    todos: [
      { id: 1, description: 'Aprender React', done: false },
      { id: 2, description: 'Aprender Mongo', done: false }
    ]
  })

  test('Debe de mostrar el componente correctamente', () => {
    render(<TodoApp />)

    expect(screen.getByText('Aprender React')).toBeTruthy()
    expect(screen.getByText('Aprender Mongo')).toBeTruthy()
    expect(screen.getByText('Total de Todos: 2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
