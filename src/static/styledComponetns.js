import styled from "styled-components";

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
`;

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1100;

  animation: appearing 1s ease;
  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledNotification = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: ${props => props.show.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(${props => props.show.position});
  transition: all 0.4s ease;
  z-index: 1100;
`;

export const Title = styled.div`
  width: 100%;
  position: absolute;
  div {
    position: relative;
    top: -100px;
    display: flex;
    justify-content: center;

    text-transform: uppercase;
    font-size: 55px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1.3px red;
  }
`;

export const StyledSpinner = styled.div`
  color: official;
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 2000;

  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 0.5s linear infinite;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: red;
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.5s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.45s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.4s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.35s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.3s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.25s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.2s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.15s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.1s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.05s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
