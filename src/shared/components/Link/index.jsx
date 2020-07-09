import React from "react"
import { StyledLink } from "./styles"

const index = (props) => {
  const { to, children } = props
  return <StyledLink to={to}>{children}</StyledLink>
}

export default index
