import { useState } from 'react'

export const useForm = () => {
  const [formState, setFormState] = useState({
    username: 'ance',
    email: 'ance@gmail.com',
    password: '123456'
  })

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState({
      username: '',
      email: '',
      password: ''
    })
  }

  return {
    ...formState,
    onInputChange,
    onResetForm
  }
}
