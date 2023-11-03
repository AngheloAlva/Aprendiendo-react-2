import { render, screen } from '@testing-library/react'
import GifItem from '../../src/components/GifItem'

/* eslint-disable no-undef */
describe('Test para el componente GifItem', () => {
  const title = 'Batman'
  const url = 'https://localhost/algo.jpg'

  test('Debe haber un match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Debe estar el titulo en el documento', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
