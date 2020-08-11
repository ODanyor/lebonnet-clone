import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const ProductMain = styled.div`
  position: relative;
  margin: 15px;
  min-width: 250px;
  width: calc(25% - 50px);
  overflow: hidden;
`

export const Product = styled.div`
  background-color: ${color.lightGray};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  &:hover {
    img {
      opacity: 1;
    }
    button {
      opacity: 1;
    }
  }
  * {
    transition: all var(--transition);
  }
  img {
    top: 0;
    position: absolute;
    opacity: 0;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    border: 1px solid ${color.red};
    color: ${color.red};
    opacity: 0;
    text-transform: uppercase;
    ${font.bold};

    &:hover {
      background-color: red;
      color: ${color.white};
    }
  }
`
