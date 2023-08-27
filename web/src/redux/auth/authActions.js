import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';
import api from '../../service/api';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await api.loginUser({ username, password });
      const token = response.data.token;
      dispatch(loginSuccess(token));
      console.log('Logged in successfully');
    } catch (error) {
      dispatch(loginFailure());
      console.error('Error logging in:', error);
    }
  };
};
