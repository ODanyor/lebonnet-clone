import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const beanie = require("../../static/images/slider/slider_img_1.png");
const scrave = require("../../static/images/home_scarve.png");
const gloves = require("../../static/images/home_gloves.png");
const exclusive = require("../../static/images/home_exclusive.png");

function CategoryBanner() {
  const Title = styled.div`
    width: 100%;
    position: absolute;
    div {
      position: relative;
      top: -100px;
      display: flex;
      justify-content: center;

      text-transform: uppercase;
      font-size: 55px;
      font-weight: 900;
      color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 1.3px red;
    }
  `;
  // eslint-disable-next-line
  const [categories, SetCategories] = useState([
    {
      background: beanie,
      title: "beanies",
      index: 1
    },
    {
      background: scrave,
      title: "scarves",
      index: 2
    },
    {
      background: gloves,
      title: "gloves",
      index: 3
    },
    {
      background: exclusive,
      title: "exclusives",
      index: 4
    }
  ]);
  return categories.map(doc => {
    return (
      <div key={doc.index}>
        <Link to="/products">
          <div>
            <img alt="img" src={doc.background} width="100%" height="auto" />
          </div>
          <Title>
            <div>{doc.title}</div>
          </Title>
        </Link>
      </div>
    );
  });
}

export default CategoryBanner;
