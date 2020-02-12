import React from "react";
import "../static/styles/ProductsPage.css";
// Components
import Item from "../components/Item";
// Item
const itemMain = require("../static/images/product/ACID_YELLOW.png");
const itemHover = require("../static/images/product/ACID_YELLOW_1.jpg");
const itemDetail = require("../static/images/product/ACID_YELLOW_DETAIL.jpg");

function ProductsPage() {
  const item = {
    photos: {
      itemMain,
      itemHover,
      itemDetail
    },
    name: "Beanie - Acid yellow",
    price: "60.00"
  };
  return (
    <div>
      <div className="ProductsContainer">
        <nav>
          <div>Beanies</div>
          <div>Scarves</div>
          <div>Gloves</div>
          <div>Exclusives</div>
        </nav>
        <div className="ProductsContent">
          <div>
            <h2 className="Title">Beanies</h2>
            <div className="ItemsContainer">
              <Item item={item} />
              <Item item={item} />
              <Item item={item} />
              <Item item={item} />
              <Item item={item} />
            </div>
          </div>
          <div>
            <h2 className="Title">Scarves</h2>
          </div>
          <div>
            <h2 className="Title">Gloves</h2>
          </div>
          <div>
            <h2 className="Title">Exclusives</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
