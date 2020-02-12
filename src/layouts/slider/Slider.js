/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../static/styles/Slider.css";
const slider_img_1 = require("../../static/images/slider/slider_img_1.png");
const slider_img_2 = require("../../static/images/slider/slider_img_2.png");

function Slider() {
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);
  const [slides, setSlides] = useState([
    { topic: "Winter is coming", img: slider_img_1 },
    { topic: "100% biodegradable", img: slider_img_2 }
  ]);

  function reset() {
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    if (seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  if (seconds === 4) {
    document.querySelector("#img").style.animation = "slideOut 1.3s ease";
  }
  if (seconds === 5) {
    document.querySelector("#img").style.animation = "slideIn 1.3s ease";
    reset();
    setCounter(counter => counter + 1);
    if (counter === slides.length - 1) {
      setCounter(0);
    }
  }

  return (
    <div className="SlideContainer">
      <div className="Slide">
        <Link className="link" to="/">
          <img
            id="img"
            className="SlideIn"
            alt="slide"
            src={slides[counter].img}
            width="100%"
            height="auto"
          />
          <div>
            <span className="Span">{slides[counter].topic}</span>
            <span className="Span">We got you covered -></span>
          </div>
        </Link>
      </div>
      {/* Slide map indicator */}
    </div>
  );
}

export default Slider;
