import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Canvas = styled.div`
  position: relative;
  width: 60%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &::after {
    position: absolute;
    top: 0;
    right: -10%;
    content: "";
    width: 10%;
    height: 100%;
    background-color: ${color.white};
    z-index: 10;
  }

  img {
    position: absolute;
    top: 5%;
    right: -5%;
    filter: drop-shadow(-15px 15px 2px rgba(0, 0, 0, 0.18));
    animation: 1000ms handAnimation ease-in-out alternate infinite;
  }
  @keyframes handAnimation {
    from {
      transform: rotate(0deg);
      transform-origin: 100% 50%;
    }
    to {
      transform: rotate(9deg);
      transform-origin: 100% 50%;
    }
  }

  span {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: ${color.white};
    ${font.size(13)};
  }
`
