import React from "react"
import { Product } from "./styles"

// Components
import { Illustrations, Details } from "shared/components"

const index = ({ product }) => {
  const { photo_1, photo_2, photo_3, ...rest } = product
  return (
    <Product>
      <Illustrations images={[photo_1, photo_2, photo_3]} />
      <Details {...rest} />
    </Product>
  )
}

export default index
