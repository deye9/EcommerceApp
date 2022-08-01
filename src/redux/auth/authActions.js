import axios from 'axios';

import {BASE_URL} from '../../config/Index';
import {saveDataToStorage} from '../../utils/Index';

// Define action types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

const errorHandler = err => {
  if (err.response) {
    return {
      type: ERROR,
      payload: err.response.data,
      message: err.response.data.message,
    };
  } else if (err.request) {
    // The client never recieved a response, or request was made but no response was received
    //   console.log(err.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    //   console.log('Error', err.message);
  }
};

export const signUp = body => async dispatch => {
  try {
    dispatch({
      type: AUTH_LOADING,
    });

    const response = await axios({
      method: 'POST',
      url: BASE_URL + 'auth/register',
      data: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: SIGN_UP,
      payload: response.data,
      message: response.data.message,
    });

    return response;
  } catch (err) {
    return dispatch(errorHandler(err));
  }
};

export const logIn = body => async dispatch => {
  try {
    dispatch({
      type: AUTH_LOADING,
    });

    const response = await axios({
      method: 'POST',
      url: BASE_URL + 'auth/login',
      data: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: LOGIN,
      payload: response.data,
      message: response.data.message,
    });

    await saveDataToStorage('access_token', response.data.data.access_token);
    await saveDataToStorage('refresh_token', response.data.data.refresh_token);

    return response;
  } catch (err) {
    return dispatch(errorHandler(err));
  }
};

export const logout = () => dispatch => dispatch({type: LOGOUT});
