import { LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
