import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md relative w-screen h-screen flex flex-col justify-between">
        <h3 className="text-7xl font-semibold text-center mb-6">
          Shary Shary Lady welcomes you! 👵
        </h3>
        <div className="flex-grow"></div>
        <div className="flex justify-center space-x-4 pb-8">
          <button
            className="bg-white text-black border-2 border-black px-8 py-4 rounded-lg text-lg"
            onClick={handleLoginClick}
          >
            LOG IN
          </button>
          <button
            className="text-white bg-black border-2 border-black px-8 py-4 rounded-lg text-lg"
            onClick={handleRegisterClick}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
