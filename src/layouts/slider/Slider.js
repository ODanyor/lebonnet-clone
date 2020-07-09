import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../../static/styles/Slider.css"
const slider_img_1 = require("../../static/images/slider/slider_img_1.jpg")
const slider_img_2 = require("../../static/images/slider/slider_img_2.jpg")

function Slider() {
  const [seconds, setSeconds] = useState(0)
  const [counter, setCounter] = useState(0)
  const [sliders, setSliders] = useState([
    { topic: "Winter is coming", img: slider_img_1 },
    { topic: "100% biodegradable", img: slider_img_2 },
  ])

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1)
    }, 1000)
    if (seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [])

  const reset = () => {
    setSeconds(0)
  }

  if (seconds === 4) {
    document.querySelector("#img").style.animation = "slideOut 1.1s ease"
  }
  if (seconds === 5) {
    document.querySelector("#img").style.animation = "slideIn 1s ease"
    reset()
    setCounter((prevState) => prevState + 1)
    if (counter === sliders.length - 1) {
      setCounter(0)
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
            src={sliders[counter].img}
            width="100%"
            height="auto"
          />
          <div>
            <span className="Span">{sliders[counter].topic}</span>
            <span className="Span">We got you covered &rarr;</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Slider
