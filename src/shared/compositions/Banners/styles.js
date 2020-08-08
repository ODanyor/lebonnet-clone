import styled from 'styled-components'

export const Banners = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`
