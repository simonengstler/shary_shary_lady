import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userToken) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :</h1>
        <span>
          <NavLink to='/'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute