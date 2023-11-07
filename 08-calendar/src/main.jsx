import React from 'react'
import ReactDOM from 'react-dom/client'
import CalendarApp from './CalendarApp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './auth/pages/LoginPage.jsx'
import Navbar from './calendar/components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <CalendarApp />
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
