import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';
import api from '../../service/api';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await api.loginUser({ username, password });
      const token = response.data.token;
      dispatch(loginSuccess(token));
      console.log('Logged in successfully');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'An error occurred while logging in';
      dispatch(loginFailure(errorMessage));
      console.error('Error logging in:', error);
      return Promise.reject(errorMessage); // Reject the promise with the error message
    }
  };
};
