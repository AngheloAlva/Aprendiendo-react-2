/* eslint-disable react/prop-types */
import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const login = (username, password) => {
    setUser({ username, password })
  }

  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  )
}
