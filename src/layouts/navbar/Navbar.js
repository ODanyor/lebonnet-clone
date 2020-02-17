import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../static/styles/Navbar.css";
import logo from "../../static/images/logo.svg";
// Layouts
import Cart from "../cart/Cart";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCart } from "../../redux/actions/productActions";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const getCart = () => {
    props.getCart();
  };
  return (
    <>
      <nav className="Navbar">
        <div className="Swiper">
          <ul>
            <li className="swipers">Free shipping Netherlands!</li>
            <li className="swipers">All products 100% bio degradable</li>
            <li className="swipers">Made in Scotland</li>
            <li className="swipers">All natural fibres in 25 colours</li>
          </ul>
          <div></div>
        </div>
        <div className="Header">
          <div className="NavContainer">
            <ul>
              <li>
                <Link className="NavLink" to="/products">
                  Beanies
                </Link>
                <div className="UnderLine"></div>
              </li>
              <li>
                <Link className="NavLink" to="/products">
                  Scarves
                </Link>
                <div className="UnderLine"></div>
              </li>
              <li>
                <Link className="NavLink" to="/products">
                  Gloves
                </Link>
                <div className="UnderLine"></div>
              </li>
              <li>
                <Link className="NavLink" to="/products">
                  Exclusives
                </Link>
                <div className="UnderLine"></div>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <ul>
              <li>
                <Link className="NavLink" to="/">
                  Our world
                </Link>
                <div className="UnderLine"></div>
              </li>
              <li>
                <Link className="NavLink" to="/account">
                  Account
                </Link>
                <div className="UnderLine"></div>
              </li>
              <li onClick={getCart}>
                <div className="NavLink" onClick={toggle}>
                  Cart(0)
                </div>
                <div className="UnderLine"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Cart open={open} trigger={toggle} />
    </>
  );
}

Navbar.propTypes = {
  getCart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
