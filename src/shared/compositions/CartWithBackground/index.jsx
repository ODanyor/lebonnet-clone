import React from "react"

import { Cart, Background } from "shared/components"

const index = ({ cart, ...rest }) => {
  return (
    <React.Fragment>
      <Cart cart={cart} {...rest} />
      <Background {...rest} />
    </React.Fragment>
  )
}

export default index
