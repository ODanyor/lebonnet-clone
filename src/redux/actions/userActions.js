import { SET_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";
import axios from "axios";

export const signIn = (credentials, history) => dispatch => {
  // dispatch({ type: LOADING_USER });
  axios
    .post("/users/signIn", credentials)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      history.push("/products");
    })
    .then(() => {
      dispatch({ type: SET_AUTHENTICATED });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const signUp = (credentials, history) => dispatch => {
  // dispatch({ type: LOADING_USER });
  axios
    .post("/users/signUp", credentials)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      history.push("/products");
    })
    .then(() => {
      dispatch({ type: SET_AUTHENTICATED });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const logOut = () => dispatch => {
  localStorage.removeItem("Token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/account";
};
const setAuthorizationHeader = token => {
  const Token = `Bearer ${token}`;
  localStorage.setItem("Token", Token);
  axios.defaults.headers.common["Authorization"] = Token;
};
