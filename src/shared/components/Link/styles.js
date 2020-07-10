import styled from "styled-components"
import { Link } from "react-router-dom"
import { color } from "shared/utils/styles"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};

  &:active {
    color: ${color.red};
  }
`
