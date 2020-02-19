import React from "react";
import { Link } from "react-router-dom";
import "../../static/styles/CategoryList.css";
const beanie = require("../../static/images/beanie.png");
const scarve = require("../../static/images/scarve.png");
const gloves = require("../../static/images/gloves.png");
const exclusive = require("../../static/images/exclusive.png");

function CategoryList() {
  return (
    <div className="CategoryList">
      <div className="CategoryContainer">
        <div className="CategoryPhotoContainer">
          <Link to="/products">
            <img alt="category" src={beanie} width="70%" height="auto" />
          </Link>
        </div>
        <div>Beanies</div>
      </div>
      <div className="CategoryContainer">
        <div className="CategoryPhotoContainer">
          <Link to="/products">
            <img alt="category" src={scarve} width="70%" height="auto" />
          </Link>
        </div>
        <div>Scarves</div>
      </div>
      <div className="CategoryContainer">
        <div className="CategoryPhotoContainer">
          <Link to="/products">
            <img alt="category" src={gloves} width="70%" height="auto" />
          </Link>
        </div>
        <div>Gloves</div>
      </div>
      <div className="CategoryContainer">
        <div className="CategoryPhotoContainer">
          <Link to="/products">
            <img alt="category" src={exclusive} width="70%" height="auto" />
          </Link>
        </div>
        <div>Exclusives</div>
      </div>
    </div>
  );
}

export default CategoryList;
