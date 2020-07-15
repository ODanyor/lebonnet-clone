import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.black};
  opacity: 0.3;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1100;
`
