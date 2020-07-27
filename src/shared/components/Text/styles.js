import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Text = styled.div`
  ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
  ${(props) => (props.size ? font.size(props.size) : null)};
  ${(props) => (props.color ? `color: ${color[props.color]}` : null)};
  ${(props) => (props.italic ? font.italic : null)};
  ${(props) => (props.bold ? font.bold : null)};
  ${(props) => (props.uppercase ? "text-transform: uppercase" : null)};
  ${(props) =>
    props.center
      ? "display: flex; height: 100%; width: 100%; align-items: center; justify-content: center"
      : null};
`
