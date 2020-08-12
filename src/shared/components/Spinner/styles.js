import styled from 'styled-components'

export const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation-name: loadingAnimation;
    animation-duration: 1500ms;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes loadingAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.1;
    }
  }
`
