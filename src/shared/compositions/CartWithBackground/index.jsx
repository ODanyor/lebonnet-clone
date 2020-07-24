import React from "react"

import { Cart, Background } from "shared/components"

const index = ({ cart, products, ...rest }) => {
  return (
    <React.Fragment>
      <Cart cart={cart} {...rest} products={products} />
      <Background {...rest} />
    </React.Fragment>
  )
}

export default index
