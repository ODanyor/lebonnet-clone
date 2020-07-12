import React from "react"
import { Products } from "./styles"

// Components
import { Product } from "shared/components"

const index = ({ products, category, ...rest }) => {
  const filterdProducts = products.filter(
    (item) => item.product.category === category
  )

  return (
    <Products>
      {filterdProducts.map((product, index) => (
        <Product key={index} product={product} {...rest} />
      ))}
    </Products>
  )
}

export default index
