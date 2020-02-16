import React from "react";
import "../../static/styles/Cart.css";

function Cart(props) {
  let style = "CartContainer CartClose";
  let back = "Background BackClose";
  if (props.open) {
    style = "CartContainer CartOpen";
    back = "Background";
  }
  return (
    <>
      <div className={style}>
        <div className="CartHeader">
          <div>Cart</div>
          <div className="CloseContainer">
            <div className="Close" onClick={props.trigger}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="CartItemsContainer">...</div>
        <div className="CartFooter">
          <div>Total</div>
          <div>€.00</div>
        </div>
        <div className="Continue">
          <button>Сontinue ordering</button>
        </div>
      </div>
      <div className={back} onClick={props.trigger}></div>
    </>
  );
}

export default Cart;
