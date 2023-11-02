/* eslint-disable no-undef */
describe('Pruebas en el archivo demo.test.js', () => {
  test('Prueba demo que no debe fallar', () => {
    // 1. Initializacion
    const message1 = 'Hola mundo'

    // 2. Estimulo
    const message2 = message1.trim()

    // 3. Observar el comportamiento
    expect(message1).toBe(message2)
  })
})
