import React from "react";
import "../static/styles/CartItem.css";
// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProduct } from "../redux/actions/productActions";
const bin = require("../static/images/delete.png");

function CartItem(props) {
  const item = props.item;
  const deleteProduct = () => {
    props.deleteProduct(item.productId);
  };
  return (
    <div className="ItemCart">
      <div className="PhotoContainerCart">
        <img alt="media" src={item.photo_1} width="100%" height="auto" />
      </div>
      <div className="ContentCotainerCart">
        <div className="ItemCategoryCart">{item.name.split("-")[0]}</div>
        <div className="ItemPriceCart">€{item.price}.00</div>
        <div className="ItemColorCart">Color: {item.name.split("-")[1]}</div>
        <div className="ItemQuantityCart">
          <div>Quantity:</div>
          <div className="QuntityInputCart">
            <button>+</button>
            <div>{item.quantity}</div>
            <button>-</button>
          </div>
        </div>
      </div>
      <div className="BinCart" onClick={deleteProduct}>
        <img alt="bin" src={bin} width="25px" height="25px" />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  deleteProduct: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteProduct: productId => dispatch(deleteProduct(productId))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
