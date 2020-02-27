import React, { useState, useEffect } from "react";
import "../static/styles/ProductPage.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../redux/actions/productActions";

function ProductPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [count, setCount] = useState(1);
  const product = props.product;
  const increment = () => {
    if (count < 20) {
      setCount(prevState => prevState + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(prevState => prevState - 1);
    }
  };
  const addToCart = () => {
    const item = {
      id: product.productId,
      quantity: count
    };
    if (props.authenticated) {
      let quantity;
      const inCart = () => {
        let foundProduct = false;

        props.cart.forEach(product => {
          if (product.productId === item.id) {
            quantity = product.quantity;
            foundProduct = true;
          }
        });

        return foundProduct;
      };

      inCart()
        ? props.addToCart({
            id: item.id,
            quantity: quantity + count
          })
        : props.addToCart({
            id: item.id,
            quantity: count
          });
    } else {
      window.location.href = "/account";
    }
  };
  return (
    <div>
      <div className="Notification"></div>
      <div className="ProductDetailContainer">
        <div className="ProductPhotos">
          <div className="SubPhotoContainer">
            <div>
              <div className="MainPhotoContainer">
                <img
                  alt="alt"
                  src={product.photo_1}
                  width="100%"
                  height="auto"
                />
              </div>
              <img alt="alt" src={product.photo_2} width="100%" height="auto" />
              {product.photo_3 ? (
                <img
                  alt="media"
                  src={product.photo_3}
                  width="100%"
                  height="auto"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="ProductDetail">
          <div className="PrimaryInfo">
            <span>{product.name ? product.name.split("-")[0] : null}</span>
            <div>{product.name}</div>
            <div className="Price">€{product.price}.00</div>
            <div className="Description">{product.description}</div>
          </div>
          <div className="OrderContainer">
            <div className="Quantity">
              <button onClick={decrement}>-</button>
              <div>{product.quantity ? product.quantity : count}</div>
              <button onClick={increment}>+</button>
            </div>
            <div className="Add" onClick={addToCart}>
              Add to cart €{product.price}.00
            </div>
          </div>
          <div className="SecondaryInfo">
            <h3>Product info</h3>
            <ul>
              <li>Fabric: {product.fabric}</li>
              <li>Fit: {product.fit}</li>
              {product.size ? <li>Size: {product.size}</li> : null}
              <li>Treatment: {product.treatment}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
});

const mapStateToProps = state => ({
  product: state.products.product,
  authenticated: state.user.authenticated,
  cart: state.products.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
