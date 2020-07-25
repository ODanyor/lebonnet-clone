import axios from "shared/utils/api"
import { getCartItems } from "./productActions"
import { storeAuthToken, removeStoredAuthToken } from "shared/utils/authToken"
import { LOADING_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types"

export const signIn = (credentials, history) => (dispatch) => {
  dispatch({ type: LOADING_USER })
  axios
    .post("/users/signIn", credentials)
    .then((res) => {
      storeAuthToken(res.data.token)
      history.push("/products")
    })
    .then(() => {
      dispatch(getCartItems())
      dispatch({ type: SET_AUTHENTICATED })
    })
    .catch((err) => console.log(err))
}

export const signUp = (credentials, history) => (dispatch) => {
  dispatch({ type: LOADING_USER })
  axios
    .post("/users/signUp", credentials)
    .then((res) => {
      storeAuthToken(res.data.token)
      history.push("/products")
    })
    .then(() => {
      dispatch(getCartItems())
      dispatch({ type: SET_AUTHENTICATED })
    })
    .catch((err) => console.log(err))
}

export const logOut = (history) => (dispatch) => {
  removeStoredAuthToken()
  dispatch({ type: SET_UNAUTHENTICATED })
  history.push("/account")
}
