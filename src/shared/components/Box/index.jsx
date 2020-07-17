import React from "react"
import { Box } from "./styles"

const index = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}
index.displayName = "Box"

export default index
