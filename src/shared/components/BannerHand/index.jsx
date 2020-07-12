import React from "react"
import { Banner, Canvas } from "./styles"

// Images
import canvas from "shared/assets/images/canvas.jpg"
import hand from "shared/assets/images/hand.png"

// Components
import { Link, Title } from "shared/components"

const index = () => {
  return (
    <Banner>
      <Canvas img={canvas}>
        <img alt="gloves" src={hand} width="115%" height="auto" />
        <Link to="/products#gloves">
          <Title centered={true}>Gloves</Title>
          <span>shop now</span>
        </Link>
      </Canvas>
    </Banner>
  )
}

export default index
