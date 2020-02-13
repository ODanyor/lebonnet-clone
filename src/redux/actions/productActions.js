import { SET_ERRORS, LOADING_DATA, GET_PRODUCTS } from "../types";
import axios from "axios";

export const getProducts = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/products")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};
