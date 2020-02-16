import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../static/styles/Navbar.css";
import logo from "../../static/images/logo.svg";
// Layouts
import Cart from "../cart/Cart";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
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
              <li>
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

export default Navbar;
