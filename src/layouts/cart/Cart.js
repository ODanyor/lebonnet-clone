import React from "react";
import "../../static/styles/Cart.css";
// Components
import CartItem from "../../components/CartItem";
import Background from "../../components/Background";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Cart(props) {
  let style = "CartContainer CartClose";
  if (props.open) {
    style = "CartContainer CartOpen";
  }

  let products = props.products;
  let items = [];
  let total = 0;

  props.cart.forEach(element => {
    products.forEach(product => {
      if (element.productId === product.id) {
        items.push({
          ...product,
          quantity: element.quantity
        });
      }
    });
  });
  items.forEach(item => {
    total = total + item.quantity * item.product.price;
  });
  return (
    <>
      {props.open ? <Background trigger={props.trigger} /> : null}
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
        <div className="CartItemsContainer">
          {items.map(item => (
            <CartItem key={item.id} item={item} trigger={props.trigger} />
          ))}
        </div>
        <div className="CartFooter">
          <div>Total</div>
          <div>€{total}.00</div>
        </div>
        <div className="Continue" onClick={props.trigger}>
          <button>Сontinue ordering</button>
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.products.cart
});

export default connect(mapStateToProps)(Cart);
