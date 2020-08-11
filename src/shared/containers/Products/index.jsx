import React from 'react'
import { Products } from './styles'
import { withLoading } from 'shared/hoc/withLoading'
import { Product } from 'shared/components'
import Skeleton from './Skeleton'

const index = ({ products, category, ...rest }) => (
  <Products>
    <ProductList products={products} rest={rest} />
  </Products>
)

function ProductList({ products, rest }) {
  return products.map((product, index) => (
    <Product key={index} product={product} {...rest} />
  ))
}

export default withLoading(Skeleton, index)
