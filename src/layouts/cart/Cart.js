import React from "react";
import "../../static/styles/Cart.css";
// Components
import CartItem from "../../components/CartItem";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Cart(props) {
  let style = "CartContainer CartClose";
  let back = "Background BackClose";
  if (props.open) {
    style = "CartContainer CartOpen";
    back = "Background";
  }

  let products = props.products;
  let items = [];
  props.cart.forEach(element => {
    products.map(product => {
      if (element.productId === product.id) {
        items.push({
          photo_1: product.product.photo_1,
          name: product.product.name,
          price: product.product.price,
          quantity: element.quantity,
          productId: element.productId
        });
      }
    });
  });
  console.log(items);

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
        <div className="CartItemsContainer">
          {items.map(item => (
            <CartItem key={item.productId} item={item} />
          ))}
        </div>
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

Cart.propTypes = {
  cart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.products.cart
});

export default connect(mapStateToProps)(Cart);
