import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// Components
import Spinner from "./components/Spinner";
// Layouts
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";

import axios from "axios";
import jwtDecode from "jwt-decode";
// Redux
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logOut } from "./redux/actions/userActions";
// Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

axios.defaults.baseURL =
  "https://europe-west2-lebonnet-0000.cloudfunctions.net/api";

const token = localStorage.Token;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logOut());
    window.location.href = "/account";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            strick
            path="/"
            render={() => {
              return (
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              );
            }}
          />
          <Route
            exact
            strick
            path="/account"
            render={() => {
              return (
                <Suspense fallback={<Spinner />}>
                  <AccountPage />
                </Suspense>
              );
            }}
          />
          <Route
            exact
            strick
            path="/products"
            render={() => {
              return (
                <Suspense fallback={<Spinner />}>
                  <ProductsPage />
                </Suspense>
              );
            }}
          />
          <Route
            exact
            strick
            path="/product"
            render={() => {
              return (
                <Suspense fallback={<Spinner />}>
                  <ProductPage />
                </Suspense>
              );
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
