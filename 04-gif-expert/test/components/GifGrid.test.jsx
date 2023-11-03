import { render, screen } from '@testing-library/react'
import GifGrid from '../../src/components/GifGrid'
import { useFecthGifs } from '../../src/hooks/useFetchGifs'

/* eslint-disable no-undef */
jest.mock('../../src/hooks/useFetchGifs')

describe('Test para el componente GifGrid', () => {
  const category = 'Batman'

  test('Debe de mostrar el loading inicialmente', () => {
    useFecthGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/algo.jpg',
        title: 'Algo'
      },
      {
        id: '123',
        url: 'https://localhost/algo.jpg',
        title: 'Algo'
      }
    ]

    useFecthGifs.mockReturnValue({
      gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(gifs.length)
  })
})
