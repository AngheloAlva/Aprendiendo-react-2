import { Outlet, Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='h-14 bg-gray-800 text-white flex items-center justify-between px-10'>
        <div className='flex items-center gap-10'>
          <Link to='/' className='text-2xl font-bold'>
            Asociaciones
          </Link>
          <div>
            <NavLink to='/marvel' className={({ isActive }) => isActive ? 'text-lg font-bold underline' : 'text-lg font-semibold hover:underline'}>
              Marvel
            </NavLink>
            <NavLink to='/dc' className={({ isActive }) => isActive ? 'text-lg font-bold ml-3 underline' : 'text-lg font-semibold hover:underline ml-3'}>
              DC
            </NavLink>
            <NavLink to='/search' className={({ isActive }) => isActive ? 'text-lg font-bold ml-3 underline' : 'text-lg font-semibold hover:underline ml-3'}>
              Search
            </NavLink>
          </div>
        </div>

        <div>
          <span className='text-blue-400'>
            Anghelo
          </span>
          <NavLink replace to='/login' className='text-lg font-semibold hover:underline ml-3'>
            Login
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
