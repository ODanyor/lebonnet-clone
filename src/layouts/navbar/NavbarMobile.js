import React, { useState } from "react";
import { Link } from "react-router-dom";
// Componets
import MobileMenu from "../../components/MobileMenu";
const home = require("../../static/images/home.png");
const user = require("../../static/images/user.png");
const bag = require("../../static/images/bag.png");

function NavbarMobile(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="MainLogo">
        <Link to="/">
          <img alt="logo" src={props.logo} width="120px" height="auto" />
        </Link>
      </div>
      <div className="NavbarMobile">
        <div className="MenuLogo" onClick={toggle}>
          <div className="SubMenuLogo">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Link to="/" className="HomeLogo">
          <img alt="logo" src={home} width="17px" height="17px" />
        </Link>
        <Link to="/account" className="UserLogo">
          <img alt="logo" src={user} width="17px" height="17px" />
        </Link>
        <div className="BagLogo" onClick={props.trigger}>
          <img alt="logo" src={bag} width="17px" height="17px" />
        </div>
      </div>
      <MobileMenu show={open} trigger={toggle} />
    </>
  );
}

export default NavbarMobile;
