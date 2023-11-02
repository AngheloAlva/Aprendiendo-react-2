import { render } from '@testing-library/react'
import { FirstApp } from '../src/first-app'

/* eslint-disable no-undef */
describe('Pruebas en First-app', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Titulo epico'
  //   const { container } = render(<FirstApp title={title} />)
  //   expect(container).toMatchSnapshot()
  // })

  test('Debe mostrar el titulo en un <h1>', () => {
    const title = 'Titulo epico'
    const { getByText, getByTestId } = render(<FirstApp title={title} />)

    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toBe(title)
    // expect(h1.innerHTML).toContain(title) // Indica si lo contiene y no si es exactamente igual

    expect(getByTestId('test-title').innerHTML).toBe(title)
  })

  test('Debe mostrar el subtitulo enviado por props', () => {
    const title = 'Titulo epico'
    const subtitle = 'Subtitulo'
    const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />)

    expect(getAllByText(subtitle).length).toBe(2)
  })
})
