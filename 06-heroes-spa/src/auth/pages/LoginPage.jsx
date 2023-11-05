const LoginPage = () => {
  return (
    <div className='mx-10 mt-10'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <hr className='mt-2 mb-6' />
      <form>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='******************'
          />
          <p className='text-xs italic text-gray-600'>
            Please choose a password.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign In
          </button>
          <a
            className='inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800'
            href='/#'
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className='mt-8 text-center'>
        Need an account?{' '}
        <a
          className='font-bold text-blue-500 hover:text-blue-800'
          href='/#'
        >
          Sign Up
        </a>
      </p>
    </div>
  )
}

export default LoginPage
