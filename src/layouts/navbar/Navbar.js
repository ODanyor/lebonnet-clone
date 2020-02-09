import React from "react";
import { Link } from "react-router-dom";
import "../../static/styles/Navbar.css";
import logo from "../../static/images/logo.svg";

function Navbar() {
  return (
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
        <div>
          <ul>
            <li>Beanies</li>
            <li>Scarves</li>
            <li>Gloves</li>
            <li>Exclusives</li>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <ul>
            <li>Our world</li>
            <li>Account</li>
            <li>Cart(0)</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
