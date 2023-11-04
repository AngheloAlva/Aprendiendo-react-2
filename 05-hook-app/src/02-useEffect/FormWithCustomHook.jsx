import { useForm } from '../hooks/useForm'

const FormWhitCustomHook = () => {
  const { username, password, email, onInputChange, onResetForm } = useForm()

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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
      <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className='btn btn-danger mt-2'>Borrar</button>
    </>
  )
}

export default FormWhitCustomHook
