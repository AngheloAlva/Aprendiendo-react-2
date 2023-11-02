// import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

// /* eslint-disable no-undef */
// describe('Pruebas en 09-promesas', () => {
//   test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
//     const id = 1
//     getHeroeByIdAsync(id)
//       .then(hero => {
//         expect(hero).toEqual({
//           id: 1,
//           name: 'Batman',
//           owner: 'DC'
//         })
//         done()
//       })
//   })

//   test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {
//     const id = 100
//     getHeroeByIdAsync(id)
//       .then(heroe => {
//         expect(heroe).toBeFalsy()
//         done()
//       })
//       .catch(error => {
//         expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`)
//         done()
//       })
//   })
// })
