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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path={`/product`} component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
