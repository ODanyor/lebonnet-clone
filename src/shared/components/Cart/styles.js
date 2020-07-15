import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Cart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 520px;
  height: 100%;
  background-color: ${color.white};
  transition: transform var(--transition);
  transform: translateX(${(props) => (!props.show ? "100%" : "0")});
  z-index: 1200;
`
