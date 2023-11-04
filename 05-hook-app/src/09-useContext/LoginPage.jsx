import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {
  const { login, user } = useContext(UserContext)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={() => login('username', 'password')}
      >
        Login
      </button>
    </>
  )
}

export default LoginPage
