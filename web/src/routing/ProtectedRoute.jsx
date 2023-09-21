import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (!userInfo.token) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-semibold mb-4'>Unauthorized Access</h1>
        <p className='text-gray-600 mb-4'>
          You are not authorized to access this page.
        </p>
        <p className='text-gray-600'>
          Please{' '}
          <NavLink
            to='/'
            className='text-blue-500 hover:underline'
          >
            Login
          </NavLink>{' '}
          to gain access.
        </p>
      </div>
    </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
