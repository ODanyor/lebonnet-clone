import React from "react"
import { Link } from "react-router-dom"
import "static/styles/BannerOne.css"
const hand = require("static/images/hand.png")
const baby = require("static/images/baby.jpg")

function BannerOne() {
  return (
    <div className="BannerOne">
      <div className="LeftBan">
        <div className="CanvasContent">
          <img alt="Hand" src={hand} height="auto" />
          <div className="Content">
            <span>Gloves</span>
            <Link className="HandLink" to="/">
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <div className="RightBan">
        <img alt="baby" src={baby} width="100%" height="auto" />
        <div className="BabyContent">
          <span>Le bonnet</span>
          <span>Mini</span>
          <Link className="BabyLink" to="/">
            Buy now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerOne
