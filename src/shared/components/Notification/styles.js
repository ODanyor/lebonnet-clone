import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Notification = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 39px;
  background-color: ${(props) => (props.added ? color.green : color.red)};
  transition: transform var(--transition);
  transform: translateY(-100%);
  z-index: 1100;
`
