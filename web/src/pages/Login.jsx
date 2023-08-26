import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Handle login click
    // Navigate to a different route using navigate('/your-route')
    navigate('/dashboard'); // Replace with your desired route
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <div className="bg-white p-8 rounded-lg h-screen shadow-md relative">
        <button
          className="absolute top-4 left-4 text-black"
          onClick={() => navigate('/')}
        >
          &larr;
        </button>

        <h3 className="text-3xl text-left my-6">
          Log in
        </h3>

        <input
          type="text"
          className="border-2 border-black px-4 py-2 rounded mb-4"
          placeholder="Username"
        />

        <input
          type="password"
          className="border-2 border-black px-4 py-2 rounded mb-4"
          placeholder="Password"
        />

        <button
          className="text-white bg-black border-2 border-black px-10 py-2 rounded-lg text-lg"
          onClick={handleLoginClick}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
