import React from "react"
import { Title } from "./styles"

const index = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>
}
index.displayName = "Title"

export default index
