import {
  SET_ERRORS,
  LOADING_DATA,
  SET_PRODUCTS,
  SET_CART,
  SET_NOTIFICATION,
  SET_REQUESTED,
} from "../types"
import axios from "shared/utils/api"
import store from "../index"

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios
    .get("/products")
    .then((res) =>
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err,
      })
    )
}

export const getProduct = (id) => (dispatch) => {
  dispatch({ type: LOADING_DATA })
  axios
    .get(`/products/${id}`)
    .then((res) =>
      dispatch({
        type: SET_PRODUCTS,
        payload: [{ id: id, product: res.data }],
      })
    )
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err,
      })
    )
}

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: SET_REQUESTED })
  const { cart } = store.getState().products
  const foundItem = cart.find((item) => item.productId === product.id)
  axios
    .post("/users/cart", {
      ...product,
      quantity: foundItem
        ? foundItem.quantity + product.quantity
        : product.quantity,
    })
    .then((res) =>
      dispatch({
        type: SET_NOTIFICATION,
        payload: res.data,
      })
    )
    .then(() => {
      dispatch(getCart())
      dispatch({ type: SET_REQUESTED })
    })
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const deleteProduct = (productId) => (dispatch) => {
  axios
    .delete(`/users/cart/${productId}`)
    .then((res) =>
      dispatch({
        type: SET_NOTIFICATION,
        payload: res.data,
      })
    )
    .then(() => dispatch(getCart()))
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err.code,
      })
    )
}

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: { message: "" },
  })
}

export const getCart = () => (dispatch) => {
  axios
    .get("/users/cart")
    .then((res) =>
      dispatch({
        type: SET_CART,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err.code))
}
