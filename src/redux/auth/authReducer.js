import {
  ERROR,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOGOUT,
  SIGN_UP,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  UPDATE_PROFILE,
} from './authActions';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  user: {},
  message: '',
  error: false,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  const userInformation = async () => {
    const getUser = await AsyncStorage.getItem('user');
    if (!getUser) {
      return initialState;
    }

    const parsedUser = JSON.parse(getUser);
    return {
      ...state,
      user: parsedUser,
    };
  };

  userInformation();

  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        message: action.message,
        loading: false,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.payload,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};
