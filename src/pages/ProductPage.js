import React, { useState, useEffect } from "react";
import "../static/styles/ProductPage.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function ProductPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = props.product;
  const [count, setCount] = useState(1);
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
              <div>{count}</div>
              <button onClick={increment}>+</button>
            </div>
            <div className="Add">Add to cart €{product.price}.00</div>
          </div>
          <div className="SecondaryInfo">
            <h3>Product info</h3>
            <ul>
              <li>{product.fabric}</li>
              <li>{product.fit}</li>
              {product.size ? <li>{product.size}</li> : null}
              <li>{product.treatment}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(mapStateToProps)(ProductPage);
