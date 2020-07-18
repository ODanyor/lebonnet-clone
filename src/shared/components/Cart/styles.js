import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Cart = styled.div`
  position: fixed;
  padding: 20px;
  top: 0;
  right: 0;
  width: 520px;
  height: 100%;
  background-color: ${color.white};
  transition: transform var(--transition);
  transform: translateX(${(props) => (!props.show ? "100%" : "0")});
  z-index: 1200;
`
export const DistanceBetween = styled.div`
  ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
  ${(props) => (props.padding ? `padding: ${props.padding}` : null)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemsContainer = styled.div`
  border-top: 1px solid ${color.gray};
  padding: 20px 50px;
`
