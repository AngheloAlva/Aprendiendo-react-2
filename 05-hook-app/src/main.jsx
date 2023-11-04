import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import MainApp from './09-useContext/MainApp'
import AboutPage from './09-useContext/AboutPage'
import HomePage from './09-useContext/HomePage'
import LoginPage from './09-useContext/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/login', element: <LoginPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
