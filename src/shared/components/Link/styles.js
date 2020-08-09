import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color } from 'shared/utils/styles'

export const StyledLink = styled(Link)`
  ${(props) =>
    props.block
      ? 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;'
      : null}

  text-decoration: none;
  color: ${color.black};

  &:active {
    color: ${color.red};
  }
`
