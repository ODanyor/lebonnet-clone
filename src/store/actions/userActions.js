import { SET_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types"
import axios from "shared/utils/api"
import { storeAuthToken, removeStoredAuthToken } from "shared/utils/authToken"

export const signIn = (credentials, history) => (dispatch) => {
  // dispatch({ type: LOADING_USER });
  axios
    .post("/users/signIn", credentials)
    .then((res) => {
      storeAuthToken(res.data.token)
      history.push("/products")
    })
    .then(() => dispatch({ type: SET_AUTHENTICATED }))
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const signUp = (credentials, history) => (dispatch) => {
  // dispatch({ type: LOADING_USER });
  axios
    .post("/users/signUp", credentials)
    .then((res) => {
      storeAuthToken(res.data.token)
      history.push("/products")
    })
    .then(() => dispatch({ type: SET_AUTHENTICATED }))
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const logOut = () => (dispatch) => {
  removeStoredAuthToken()
  dispatch({ type: SET_UNAUTHENTICATED })
  window.location.href = "/account"
}
