import { Outlet } from 'react-router-dom'
import { FaCalendarDays } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
      <nav className='bg-zinc-900 py-4 px-10 flex justify-between'>
        <div className='flex gap-4 items-center'>
          <FaCalendarDays className='text-2xl text-amber-300 -mt-1' />
          <span className='text-white font-bold text-xl'>Anghelo</span>
        </div>
        <button className='bg-amber-300 text-zinc-800 hover:text-white font-bold hover:bg-amber-400 transition-colors rounded-md py-1 px-4'>
          Log out
        </button>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
