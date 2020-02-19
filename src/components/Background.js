import React from "react";
import styled from "styled-components";

function Background(props) {
  const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 950;

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
  return <Background onClick={props.trigger} />;
}

export default Background;
