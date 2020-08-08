import styled from 'styled-components'

export const Box = styled.div`
  display: block;
  ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
  ${(props) => (props.padding ? `padding: ${props.padding}` : null)};
`
