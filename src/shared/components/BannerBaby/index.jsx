import React from "react"
import { Banner } from "./styles"

// Images
import baby from "shared/assets/images/baby.jpg"

// Components
import { Link, Title } from "shared/components"

const index = () => {
  return (
    <Banner img={baby}>
      <Link to="/products#beanies">
        <Title centered={true} colored={true}>
          Le bonnet
        </Title>
        <Title centered={true} colored={true}>
          Mini
        </Title>
        <span>Buy now</span>
      </Link>
    </Banner>
  )
}

export default index
