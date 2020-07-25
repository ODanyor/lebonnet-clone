import {
  LOADING_DATA,
  SET_REQUESTED,
  SET_PRODUCTS,
  SET_CART_ITEMS,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
} from "../types"

const initialState = {
  loading: false,
  requested: false,
  products: [],
  errors: {},
  cart: [
    // { productId: string, quantity: number }
  ],
}

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    // LOADING CASES
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case SET_REQUESTED:
      return {
        ...state,
        requested: !state.requested,
      }

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }

    // CART CASES
    case SET_CART_ITEMS:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      }
    case ADD_CART_ITEM: {
      const foundItem = state.cart.find(
        (item) => item.productId === action.payload.productId
      )
      return {
        ...state,
        cart: foundItem
          ? [
              {
                ...action.payload,
                quantity: action.payload.quantity + foundItem.quantity,
              },
              ...state.cart.filter(
                (item) => item.productId !== action.payload.productId
              ),
            ]
          : [action.payload, ...state.cart],
        loading: false,
      }
    }
    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
        loading: false,
      }

    default:
      return state
  }
}

export default productReducers
