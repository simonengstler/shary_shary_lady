import React from 'react';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authActions';
import Error from '../components/Error';
import Spinner from '../components/Spinner';

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (userInfo && userInfo.token) {
      navigate('/groups')
    }
  }, [userInfo])

  const submitForm = (data) => {
    dispatch(loginUser(data));
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

        <h3 className="text-3xl text-left my-6">Log in</h3>

        <form onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <input
            type="text"
            name="username"
            className="border-2 border-black px-4 py-2 rounded mb-4"
            placeholder="Username"
            {...register('username')}
            required
          />

          <input
            type="password"
            name="password"
            className="border-2 border-black px-4 py-2 rounded mb-4"
            placeholder="Password"
            {...register('password')}
            required
          />

          <button
            type="submit" // Specify the button type as "submit" to trigger form submission
            className="text-white bg-black border-2 border-black px-10 py-2 rounded-lg text-lg"
            disabled={loading}
          >
            {loading ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
