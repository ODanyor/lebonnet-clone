import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/Item.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setProduct, addToCart } from "../redux/actions/productActions";

function Item(props) {
  const productId = props.productId;
  const addToCart = () => {
    if (props.authenticated) {
      let quantity;
      const inCart = () => {
        let foundProduct = false;

        props.cart.forEach(product => {
          if (product.productId === productId) {
            quantity = product.quantity;
            foundProduct = true;
          }
        });

        return foundProduct;
      };

      inCart()
        ? props.addToCart({
            id: productId,
            quantity: quantity + 1
          })
        : props.addToCart({
            id: productId,
            quantity: 1
          });
    } else {
      window.location.href = "/account";
    }
  };
  const product = { ...props.product, productId };
  const setProductInState = () => {
    props.setProduct(product);
  };
  return (
    <div className="Item">
      <div className="PictureContainer" onClick={setProductInState}>
        <Link to={`/product`}>
          <img
            className="Main"
            src={product.photo_1}
            alt="Main"
            width="100%"
            height="auto"
          />
          <img
            className="Hover"
            src={product.photo_2}
            alt="Hover"
            width="100%"
            height="auto"
          />
        </Link>
        <div className="AddToCartButton" onClick={addToCart}>
          Add to cart €{product.price}.00
        </div>
      </div>
      <div className="ItemsContent">
        <div>{product.name}</div>
        <div>€{product.price}.00</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  setProduct: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  setProduct: product => dispatch(setProduct(product)),
  addToCart: product => dispatch(addToCart(product))
});

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  cart: state.products.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
