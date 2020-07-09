import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const ForNewsletter = styled.div`
  padding: 4em 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${color.gray};
  line-height: 2.2;

  div {
    max-width: 400px;
  }

  h2 {
    text-transform: uppercase;
  }

  p {
    ${font.size(13)};
  }
`

export const SingleForm = styled.form`
  padding: 5px;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${color.black};

  input {
    border: none;
    background: none;
  }

  button {
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    width: 150px;
    height: 100%;
    background-color: ${color.black};
    color: ${color.white};
  }
`
