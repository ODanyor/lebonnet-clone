import styled from "styled-components"

export const Box = styled.div`
  ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
  ${(props) => (props.padding ? `padding: ${props.padding}` : null)};
`
