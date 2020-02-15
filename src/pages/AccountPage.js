import React, { useEffect } from "react";
import "../static/styles/AccountPage.css";

function AccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="AccountContainer">
      <div className="LoginSide">
        <div className="Gradient">
          <div className="FormContainer">
            <form className="Form LogForm">
              <div className="LoginTitle">Registered customers</div>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Log in</button>
            </form>
          </div>
        </div>
      </div>
      <div className="RegisterSide">
        <div className="FormContainer">
          <form className="Form RegForm">
            <div className="RegisterTitle">New customers</div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button>Create an account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
