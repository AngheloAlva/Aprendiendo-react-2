import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'
/* eslint-disable no-undef */
describe('Puebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()

    expect(user).toEqual(testUser)
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC567',
      username: 'Anghelo'
    }

    const user = getUsuarioActivo('Anghelo')

    expect(user).toEqual(testUser)
  })
})
