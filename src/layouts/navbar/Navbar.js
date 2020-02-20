import React, { useState } from "react";
import "../../static/styles/Navbar.css";
import logo from "../../static/images/logo.svg";
// Components
import Notification from "../../components/Notification";
// Layouts
import Cart from "../cart/Cart";
import NavbarPC from "./NavbarPC";
import NavbarMobile from "./NavbarMobile";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Notification />
      <NavbarPC length={props.cart.length} trigger={toggle} logo={logo} />
      <NavbarMobile trigger={toggle} logo={logo} />
      <Cart open={open} trigger={toggle} />
    </>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cart: state.products.cart
});

export default connect(mapStateToProps)(Navbar);
