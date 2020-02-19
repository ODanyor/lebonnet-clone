import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// Layouts
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
// Pages
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

import axios from "axios";
import jwtDecode from "jwt-decode";
// Redux
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logOut } from "./redux/actions/userActions";

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
          <Route exact strick path="/" component={HomePage} />
          <Route exact strick path="/account" component={AccountPage} />
          <Route exact strick path="/products" component={ProductsPage} />
          <Route exact strick path="/product" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
