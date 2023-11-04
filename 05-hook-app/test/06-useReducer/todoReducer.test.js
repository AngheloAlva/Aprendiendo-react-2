import { todoReducer } from '../../src/06-useReducer/todoReducer'

/* eslint-disable no-undef */
describe('Pruebas en todoReducer', () => {
  const initialState = [{
    id: 1,
    desc: 'Aprender React',
    done: false
  }]

  test('Debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  test('Debe de agregar un TODO', () => {
    const action = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        desc: 'Aprender Node',
        done: false
      }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toEqual([...initialState, action.payload])
    // expect(newState).toContain(action.payload)
  })

  test('Debe de eliminar un TODO', () => {
    const action = {
      type: '[TODO] delete todo',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
    expect(newState).toEqual([])
  })

  test('Debe de hacer el TOGGLE del TODO', () => {
    const action = {
      type: '[TODO] toggle todo',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)
  })
})
