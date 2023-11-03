import { renderHook, waitFor } from '@testing-library/react'
import { useFecthGifs } from '../../src/hooks/useFetchGifs'

/* eslint-disable no-undef */
describe('Pruebas en el custom hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFecthGifs('Batman'))
    const { gifs, isLoading } = result.current

    expect(gifs.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Debe retornar un arreglo de imagenes y isLOading en false', async () => {
    const { result } = renderHook(() => useFecthGifs('Batman'))

    await waitFor(() => {
      expect(result.current.gifs.length).toBeGreaterThan(0)
    })

    const { gifs, isLoading } = result.current

    expect(gifs.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
