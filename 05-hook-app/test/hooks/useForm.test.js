/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Test para custom hook useForm', () => {
  const initialForm = {
    username: 'ance',
    email: 'ance@gmail.com'
  }

  test('Debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current.formState).toEqual(initialForm)
  })

  test('Debe de cambiar el valor del formulario (cambiar username)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    act(() => {
      onInputChange({
        target: {
          name: 'username',
          value: 'Ance'
        }
      })
    })

    expect(result.current.formState).toEqual({ ...initialForm, username: 'Ance' })
    expect(result.current.formState).not.toEqual(initialForm)
  })

  test('Debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({
        target: {
          name: 'username',
          value: 'Ance'
        }
      })

      onResetForm()
    })

    expect(result.current.formState).toEqual(initialForm)
  })
})
