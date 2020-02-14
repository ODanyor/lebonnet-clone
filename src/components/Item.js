import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/Item.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setProduct } from "../redux/actions/productActions";

function Item(props) {
  const product = props.product;
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
      </div>
      <div className="ItemsContent">
        <div>{product.name}</div>
        <div>€{product.price}.00</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  setProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setProduct: product => dispatch(setProduct(product))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
