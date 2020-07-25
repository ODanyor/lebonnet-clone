import {
  LOADING_DATA,
  SET_REQUESTED,
  SET_PRODUCTS,
  SET_NOTIFICATION,
  SET_CART_ITEMS,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
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
    .catch((err) => console.log(err))
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
    .catch((err) => console.log(err))
}

export const addProductToCart = (product) => (dispatch) => {
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
      dispatch({
        type: ADD_CART_ITEM,
        payload: { productId: product.id, quantity: product.quantity },
      })
      dispatch({ type: SET_REQUESTED })
    })
    .catch((err) => console.log(err))
}

export const deleteProductFromCart = (productId) => (dispatch) => {
  axios
    .delete(`/users/cart/${productId}`)
    .then((res) =>
      dispatch({
        type: SET_NOTIFICATION,
        payload: res.data,
      })
    )
    .then(() => dispatch({ type: DELETE_CART_ITEM, payload: productId }))
    .catch((err) => console.log(err))
}

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: { message: "" },
  })
}

export const getCartItems = () => (dispatch) => {
  axios
    .get("/users/cart")
    .then((res) =>
      dispatch({
        type: SET_CART_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err.code))
}
