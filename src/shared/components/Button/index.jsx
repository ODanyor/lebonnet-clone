import React from "react"
import { Button } from "./styles"

const index = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}
index.displayName = "Button"

export default index
