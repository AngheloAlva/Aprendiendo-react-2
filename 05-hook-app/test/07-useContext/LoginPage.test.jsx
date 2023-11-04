import { fireEvent, render, screen } from '@testing-library/react'
import LoginPage from '../../src/09-useContext/LoginPage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

/* eslint-disable no-undef */
describe('Test en el componente LoginPage', () => {
  test('Debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: {}, login: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByRole('button').textContent).toBe('Login')
  })

  test('Debe de llamar el setUser cuando se hace click en el boton', () => {
    const setUserMook = jest.fn()

    render(
      <UserContext.Provider value={{ user: {}, login: setUserMook }}>
        <LoginPage />
      </UserContext.Provider>
    )

    fireEvent.click(screen.getByRole('button'))

    expect(setUserMook).toHaveBeenCalledWith('username', 'password')
  })
})
