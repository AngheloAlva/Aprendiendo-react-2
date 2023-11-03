import { getGifs } from '../../src/helpers/getGifs'

/* eslint-disable no-undef */
describe('Test para getGifs', () => {
  test('Debe retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('Batman')
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
