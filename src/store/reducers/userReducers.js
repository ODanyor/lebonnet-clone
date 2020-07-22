import {
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_NOTIFICATION,
} from "../types"

const initialState = {
  loading: false,
  authenticated: false,
  notification: null,
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      }
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      }
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        loading: false,
      }
    case SET_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducers
