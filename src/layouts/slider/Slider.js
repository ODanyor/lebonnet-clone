/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import "../../static/styles/Slider.css";
const slider_img_1 = require("../../static/images/slider/slider_img_1.png");
const slider_img_2 = require("../../static/images/slider/slider_img_2.png");

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      counter: 0,
      slides: []
    };
  }

  UNSAFE_componentWillMount() {
    console.log("First");
    this.setState(prevState => ({
      ...prevState,
      slides: [
        { topic: "Winter is coming", img: slider_img_1 },
        { topic: "100% biodegradable", img: slider_img_2 }
      ]
    }));
  }
  // componentDidMount() {
  //   let interval = null;
  //   interval = setInterval(() => {
  //     this.setState(prevState => prevState.seconds + 1);
  //   }, 1000);
  //   if (this.state.seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }
  // "slideOut 1.3s ease";
  // "slideIn 1s ease";

  // reset = () => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     seconds: 0
  //   }));
  // };

  // slider = () => {
  //   console.log("Slider is running ...");
  //   if (this.state.seconds === 4) {
  //     document.querySelector("#img").style.animation = "slideOut 1.1s ease";
  //   }
  //   if (this.state.seconds === 5) {
  //     document.querySelector("#img").style.animation = "slideIn 1s ease";
  //     this.reset();
  //     this.setState(prevState => prevState.counter + 1);
  //     if (this.state.counter === this.state.slides.length - 1) {
  //       this.setState(prevState => ({
  //         ...prevState,
  //         counter: 0
  //       }));
  //     }
  //   }
  // };

  render() {
    return (
      <div className="SlideContainer">
        <div className="Slide">
          <Link className="link" to="/">
            <img
              id="img"
              className="SlideIn"
              alt="slide"
              src={this.state.slides[this.state.counter].img}
              width="100%"
              height="auto"
            />
            <div>
              <span className="Span">
                {this.state.slides[this.state.counter].topic}
              </span>
              <span className="Span">We got you covered &rarr;</span>
            </div>
          </Link>
        </div>
        {/* Slide map indicator */}
      </div>
    );
  }
}

export default Slider;
