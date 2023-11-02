/* eslint-disable no-undef */
import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Puebas en 02-template-string', () => {
  test('getSaludo debe retornar Anghelo', () => {
    const nombre = 'Anghelo'
    const saludo = getSaludo(nombre)
    expect(saludo).toBe('Hola ' + nombre)
  })
})
