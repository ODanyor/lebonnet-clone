import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/MobileMenu.css";
// Components
import Background from "../components/Background";

function MobileMenu(props) {
  let style = "MobileMenu hide";
  if (props.show) {
    style = "MobileMenu open";
  }
  return (
    <>
      {props.show ? <Background trigger={props.trigger} /> : null}
      <div className={style}>
        <ul>
          <li onClick={props.trigger}>
            <Link className="NavLink" to="/products">
              Beanies
            </Link>
          </li>
          <li>
            <Link className="NavLink" to="/products">
              Scarves
            </Link>
          </li>
          <li>
            <Link className="NavLink" to="/products">
              Gloves
            </Link>
          </li>
          <li>
            <Link className="NavLink" to="/products">
              Exclusives
            </Link>
          </li>
        </ul>
        <ul>
          <li>Terms & conditions</li>
          <li>Privacy & cookies policy</li>
          <li>Returns & exchanges</li>
          <li>Store locator</li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
