import React from "react"

import { Cart, Background } from "shared/components"

const index = (props) => {
  return (
    <React.Fragment>
      <Cart {...props} />
      <Background {...props} />
    </React.Fragment>
  )
}

export default index
