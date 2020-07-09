import React from "react"
import { Title } from "./styles"

const index = ({ children, colored }) => {
  return <Title colored={colored}>{children}</Title>
}
index.displayName = "Title"

export default index
