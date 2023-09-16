import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h2>
      <p className="text-lg text-gray-600 mt-2">
        The requested page could not be found.
      </p>
      <Link
        to="/"
        className="mt-4 text-blue-500 hover:underline text-lg"
      >
        Go back to the Home Page
      </Link>
    </div>
  );
};

export default NotFound;
