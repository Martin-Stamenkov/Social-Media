import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../types/authTypes';
import { Requests, signInData, signUpData } from '../../api/requests';

export const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};
export const signUpSuccess = (user: any) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  };
};
export const signUpFailure = (error: string) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
export const signUp = (data: signUpData) => {
  return (dispatch: any) => {
    dispatch(signUpRequest());
    Requests.signUpUser(data)
      .then((response) => dispatch(signUpSuccess(response)))
      .catch((error) => {
        console.log(error);
        if (error.message) {
          dispatch(signUpFailure(error));
        } else {
          console.log(error);
        }
      });
  };
};
export const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};
export const signInSuccess = (user: any) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const signInFailure = (error: string) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};
export const signIn = (data: signInData) => {
  return (dispatch: any) => {
    dispatch(signInRequest());
    Requests.signInUser(data)
      .then((response) => dispatch(signInSuccess(response)))
      .catch((error) => {
        console.log(error);
        if (error.message) {
          dispatch(signInFailure(error));
        } else {
          console.log(error);
        }
      });
  };
};
