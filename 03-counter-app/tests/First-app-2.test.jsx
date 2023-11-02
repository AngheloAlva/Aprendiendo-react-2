import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/first-app'

/* eslint-disable no-undef */
describe('Pruebas en First-app', () => {
  const title = 'Titulo epico'
  const subtitle = 'Subtitulo'

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar el titulo con el mensaje: "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
  })

  test('Debe mostrar el titulo en un <h1>', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title)
  })

  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subtitle} />)
    expect(screen.getAllByText(subtitle).length).toBe(2)
  })
})
