import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Title = styled.div`
  ${font.size(75)};
  ${font.bold};
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 2px
    ${(props) => (props.colored ? color.red : color.white)};
  transition: color var(--transition);
  &:hover {
    color: ${(props) => (props.colored ? color.red : color.white)};
  }
`
