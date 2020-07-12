import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const FormContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  position: relative;
  top: 15rem;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  background: none;
  border: 1px solid ${(props) => (props.colored ? color.white : color.gray)};

  height: 4em;
  margin: 5px 0;
  padding: 5px;
  &::placeholder {
    color: ${(props) => (props.error ? color.red : color.gray)};
    ${font.bold};
  }
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  margin: 1em 0;

  text-transform: uppercase;
  ${font.size(17)};
  ${font.bold};
  color: ${(props) => (props.colored ? color.red : color.black)};
  height: 4em;
  background-color: ${(props) => (props.colored ? color.white : color.gray)};
  transition: all var(--transition);
  &:hover {
    color: ${color.white};
    background-color: ${color.red};
  }
`

export const Message = styled.div`
  color: ${color.red};
`
