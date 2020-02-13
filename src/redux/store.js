import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// Middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

// Reducers
import productReducers from "./reducers/productReducers";

const initialState = {};
const middleware = [thunk, logger];

const rootReducers = combineReducers({
  products: productReducers
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const store = createStore(rootReducers, initialState, enhancer);

export default store;
