import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand bg-body-tertiary rounded-3 mb-4'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>useContext</Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
