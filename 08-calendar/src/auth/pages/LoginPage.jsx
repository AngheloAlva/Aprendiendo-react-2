const LoginPage = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen gap-2 px-10'>
      <div className='flex flex-col bg-red-500 rounded-md py-5 px-4 w-1/2 h-2/5'>
        <h3 className='font-bold text-xl mb-4'>Log in</h3>
        <form className='flex flex-col gap-2 text-black'>
          <input className='py-1 px-4 rounded-md' type='email' placeholder='Email' />
          <input className='py-1 px-4 rounded-md' type='password' placeholder='Password' />
          <button className='w-full bg-amber-300 text-zinc-800 hover:text-white font-bold hover:bg-amber-400 transition-colors rounded-md py-1 my-2' type='submit'>
            Login
          </button>
        </form>
      </div>

      <div className='flex flex-col bg-blue-600 rounded-md py-5 px-4 w-1/2 h-2/5'>
        <h3 className='font-bold text-xl mb-4'>Log up</h3>
        <form className='flex flex-col gap-2 text-black'>
          <input className='py-1 px-4 rounded-md' type='text' placeholder='Name' />
          <input className='py-1 px-4 rounded-md' type='email' placeholder='Email' />
          <input className='py-1 px-4 rounded-md' type='password' placeholder='Password' />
          <input className='py-1 px-4 rounded-md' type='password' placeholder='Confirm password' />
          <button className='w-full bg-teal-300 text-zinc-800 hover:text-white font-bold hover:bg-teal-500 transition-colors rounded-md py-1 my-2' type='submit'>
            Create account
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
