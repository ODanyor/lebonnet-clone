import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Product = styled.div`
  margin: 15px;
  width: calc(25% - 50px);
  background-color: ${color.white};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  button {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
  }
`
