import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Buttons = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  ${(props) => (props.border ? `border: 1px solid ${props.border}` : null)};

  button {
    height: 100%;
  }
`

export const CounterButtons = styled.div`
  height: 100%;
  display: grid;
  border: 1.7px solid ${color.lightGray};
  grid-template-columns: 30px 50px 30px;
`

export const AddButton = styled.button`
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  background: none;
  border: var(--border) ${color.red};
  ${font.bold};
  ${font.color(color.red)};
  transition: var(--transition);
  &:hover {
    ${font.color(color.white)};
    background-color: ${color.red};
  }
`
