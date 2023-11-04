import { render, screen } from '@testing-library/react'
import MainApp from '../../src/09-useContext/MainApp'
import { MemoryRouter } from 'react-router-dom'

/* eslint-disable no-undef */
describe('Test en el componente MainApp', () => {
  test('Debe de mostrar el componente sin el usuario', () => {
    render(<MemoryRouter><MainApp /></MemoryRouter>)
  })

  test('Debe de mostrar el componente con el LoginPage', () => {
    render(<MemoryRouter initialEntries={['/login']}><MainApp /></MemoryRouter>)

    expect(screen.getByText('Login')).toBeTruthy()
  })
})
