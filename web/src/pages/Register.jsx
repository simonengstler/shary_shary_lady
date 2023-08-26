import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/myEndpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  console.log(data)

  const handleRegisterClick = () => {
    navigate('/login');
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
          Register
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
          onClick={handleRegisterClick}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
