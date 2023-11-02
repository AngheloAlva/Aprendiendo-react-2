import { getImagen } from '../../src/base-pruebas/11-async-await'

/* eslint-disable no-undef */
describe('Pruebas en 11-async-await', () => {
  test('getImagen debe retornar el url de la imagen', async () => {
    const resp = await getImagen()

    expect(resp).toBe('No se pudo cargar la imagen')
  })
})
