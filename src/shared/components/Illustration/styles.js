import styled from 'styled-components'
import { color } from 'shared/utils/styles'

export const Illustration = styled.div`
  width: 100%;
  background-color: ${color.lightGray};

  @media screen and (max-width: 1000px) {
    & {
      min-width: 100vw;
    }
  }
`
