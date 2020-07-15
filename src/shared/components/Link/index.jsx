import React from "react"
import { StyledLink } from "./styles"

const index = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default index
