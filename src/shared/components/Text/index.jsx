import React from "react"
import { Text } from "./styles"

const index = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>
}
index.displayName = "Text"

export default index
