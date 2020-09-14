import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../types/authTypes';

const authState: any = {
  error: '',
  loading: true,
  user: null,
};

export const authReducer = (
  state = authState,
  action: { type: string; payload?: any }
): any => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      break;
  }
};
