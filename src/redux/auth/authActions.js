import axios from 'axios';
import http from 'http-status';

import {BASE_URL} from '../../config/Index';
import {saveDataToStorage} from '../../utils/Index';

// Define action types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

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
        // 'Authorization': 'Bearer ' + AsyncStorage.getItem('token'),
      },
    });

    if (response.status !== http.CREATED) {
      dispatch({
        type: AUTH_FAILURE,
        payload: response.data.data,
        message: response.data.data.message,
      });
    }

    dispatch({
      type: SIGN_UP,
      payload: response.data,
      message: response.data.message,
    });

    saveDataToStorage('access_token', response.data.data.access_token);
    saveDataToStorage('refresh_token', response.data.data.refresh_token);

    return response;
  } catch (error) {
    throw error;
  }
};
