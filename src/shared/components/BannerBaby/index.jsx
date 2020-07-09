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
        <span>
          <Title colored={true}>Le bonnet</Title>
          <Title colored={true}>Mini</Title>
          <div>But now</div>
        </span>
      </Link>
    </Banner>
  )
}

export default index
