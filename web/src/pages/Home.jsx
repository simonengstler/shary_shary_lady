import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-4/5 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-center mb-6">
          Welcome to Shary Shary Lady!
        </h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-black border-2 border-black px-4 py-2 rounded-full">
            LOG IN
          </button>
          <button className="text-white bg-black border-2 border-black px-4 py-2 rounded-full">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
