import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Text = styled.div`
  ${(props) => (props.size ? font.size(props.size) : null)};
  ${(props) => (props.color ? color[props.color] : null)};
  ${(props) => (props.italic ? font.italic : null)};
  ${(props) => (props.bold ? font.bold : null)};
  ${(props) =>
    props.center
      ? "display: flex; align-items: center; justify-content: center"
      : null};
`
