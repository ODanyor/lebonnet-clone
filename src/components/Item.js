import React from "react";
import "../static/styles/Item.css";

function Item(props) {
  const product = props.product;
  return (
    <div className="Item">
      <div className="PictureContainer">
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
      </div>
      <div className="ItemsContent">
        <div>{product.name}</div>
        <div>€{product.price}</div>
      </div>
    </div>
  );
}

export default Item;
