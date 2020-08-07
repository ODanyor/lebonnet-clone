import React from 'react'
import { Box } from './styles'

const index = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export default index
