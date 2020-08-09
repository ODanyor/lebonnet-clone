import React from 'react'
import { StyledLink } from './styles'

const index = ({ to, children, ...rest }) => {
  return (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  )
}

export default index
