import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../service/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleRegisterClick = async () => {
    try {
      await api.registerUser({ username, password });
      console.log('User registered successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      }
    }
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

        <h3 className="text-3xl text-left my-6">Register</h3>

        <input
          type="text"
          className="border-2 border-black px-4 py-2 rounded mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="border-2 border-black px-4 py-2 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}

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
