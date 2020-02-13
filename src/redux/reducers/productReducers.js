import { SET_ERRORS, LOADING_DATA, GET_PRODUCTS } from "../types";

const initialState = {
  loading: false,
  products: [],
  errors: {}
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default productReducers;
