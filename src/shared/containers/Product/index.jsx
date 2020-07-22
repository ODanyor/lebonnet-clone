import React from "react"
import { Product } from "./styles"
import { Illustrations, Details } from "shared/components"

const index = (props) => {
  const { product, ...rest } = props
  const { photo_1, photo_2, photo_3, ...details } = product

  return (
    <Product>
      <Illustrations images={[photo_1, photo_2, photo_3]} />
      <Details {...details} {...rest} />
    </Product>
  )
}

export default index
