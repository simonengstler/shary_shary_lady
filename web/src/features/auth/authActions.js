import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/services/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const userData = await api.loginUser({ username, password });
      // store user's token in local storage
      localStorage.setItem('userToken', userData.data.token)
      return userData
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      await api.registerUser({ username, password });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);


