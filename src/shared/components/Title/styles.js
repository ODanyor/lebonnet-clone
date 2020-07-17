import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Title = styled.div`
  ${(props) => props.centered && "text-align: center"};
  ${(props) => (props.size ? font.size(props.size) : font.size(75))};
  ${font.bold};
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1.3px
    ${(props) => (props.colored ? color.red : color.white)};
  transition: color var(--transition);
  &:hover {
    color: ${(props) => (props.colored ? color.red : color.white)};
  }
`
