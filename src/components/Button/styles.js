import styled from "styled-components"

export const Button = styled.div`
  cursor: pointer;
  padding: 6px 20px;
  border: 1px solid black;
  font-size: 12px;
  color: #000;
  background-color: #fff;
  transition: all 0.4s ease;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`
