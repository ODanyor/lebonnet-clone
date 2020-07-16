import {
  SET_ERRORS,
  LOADING_DATA,
  SET_PRODUCTS,
  SET_CART,
  SET_MESSAGE,
} from "../types"
import axios from "shared/utils/api"

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios
    .get("/products")
    .then((res) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err,
      })
    })
}

export const getProduct = (id) => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios
    .get(`/products/${id}`)
    .then((res) => {
      dispatch({
        type: SET_PRODUCTS,
        payload: [{ id: id, product: res.data }],
      })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err,
      })
    })
}

export const addToCart = (product) => (dispatch) => {
  axios
    .post("/users/cart", product)
    .then((res) => {
      dispatch({
        type: SET_MESSAGE,
        payload: res.data,
      })
    })
    .then(() => {
      dispatch(getCart())
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const deleteProduct = (productId) => (dispatch) => {
  axios
    .delete(`/users/cart/${productId}`)
    .then((res) => {
      dispatch({
        type: SET_MESSAGE,
        payload: res.data,
      })
    })
    .then(() => {
      dispatch(getCart())
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.code,
      })
    })
}

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: SET_MESSAGE,
    payload: { message: "" },
  })
}

export const getCart = () => (dispatch) => {
  axios
    .get("/users/cart")
    .then((res) => {
      dispatch({
        type: SET_CART,
        payload: res.data,
      })
    })
    .catch((err) => {
      return console.log(err.code)
    })
}
