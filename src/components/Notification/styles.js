import styled from "styled-components"

export const Notification = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.show.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(${(props) => props.show.position});
  transition: all 0.4s ease;
  z-index: 1100;
`
