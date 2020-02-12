import React from "react";
import "../static/styles/Item.css";

function Item(props) {
  const item = props.item;
  return (
    <div className="Item">
      <div className="PictureContainer">
        <img
          className="Main"
          src={item.photos.itemMain}
          alt="Main"
          width="100%"
          height="auto"
        />
        <img
          className="Hover"
          src={item.photos.itemHover}
          alt="Hover"
          width="100%"
          height="auto"
        />
      </div>
      <div className="ItemsContent">
        <div>{item.name}</div>
        <div>€{item.price}</div>
      </div>
    </div>
  );
}

export default Item;
