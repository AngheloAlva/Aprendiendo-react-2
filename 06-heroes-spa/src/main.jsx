import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import HeroesApp from './HeroesApp'
import DcPage from './heroes/pages/DcPage'
import LoginPage from './auth/pages/LoginPage'
import Navbar from './heroes/components/Navbar'
import MarvelPage from './heroes/pages/MarvelPage'

import './index.css'
import SearchPage from './heroes/pages/SearchPage'
import HeroPage from './heroes/pages/HeroPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/marvel',
        element: <MarvelPage />
      },
      {
        path: '/dc',
        element: <DcPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/hero/:heroId',
        element: <HeroPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
