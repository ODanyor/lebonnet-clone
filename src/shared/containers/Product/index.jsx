import React from "react"
import { Product } from "./styles"

// Components
import { Details } from "shared/components"

const index = (props) => {
  return (
    <Product>
      <Details {...props} />
    </Product>
  )
}

export default index
