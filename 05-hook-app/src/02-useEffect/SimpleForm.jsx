import { useForm } from '../hooks/useForm'

const SimpleForm = () => {
  const { formState, onInputChange } = useForm()

  const { username, email } = formState

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='user@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}

export default SimpleForm
