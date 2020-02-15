import React from "react";
import "../../static/styles/Footer.css";

function Footer(props) {
  return (
    <div>
      <div className="PrimaryFooter">
        <div className="LeftSide">
          <div className="SubSides">
            <div className="FooterTitles">Sign up for our newsletter</div>
            <form className="EmailForm">
              <input type="text" placeholder="Your email address" />
              <button>Sign up</button>
            </form>
          </div>
        </div>
        <div className="RightSide">
          <div className="SubSides">
            <div className="FooterTitles">LE BONNET</div>
            <div className="SubTitle">
              All products are made in Scotland. All materials are locally
              sourced (UK) or imported from Italy.
            </div>
          </div>
        </div>
      </div>
      <div className="SecondaryFooter">
        <div>
          <div className="SubTitles">FAQ</div>
          <ul>
            <li>Terms & conditions</li>
            <li>Privacy & cookies policy</li>
            <li>Returns & exchanges</li>
          </ul>
        </div>
        <div>
          <div className="SubTitles">Who we are</div>
          <ul>
            <li>Store locator</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <div className="SubTitles">Company</div>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className="SubTitles">Wanna rock with us</div>
          <div>
            <div>Facebook</div>
            <div>Instafram</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
