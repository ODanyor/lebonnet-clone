import {
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_MESSAGE
} from "../types";

const initialState = {
  loading: false,
  authenticated: false,
  message: {}
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    case SET_MESSAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducers;
