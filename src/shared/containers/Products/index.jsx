import React from "react"
import { Products } from "./styles"

// HOC
import { withLoading } from "shared/hoc/withLoading"

// Components
import { Product } from "shared/components"

// Modules
import Skeleton from "./Skeleton"

const index = ({ products, category, ...rest }) => (
  <Products>
    {products.map((product, index) => (
      <Product key={index} product={product} {...rest} />
    ))}
  </Products>
)

export default withLoading(Skeleton, index)
