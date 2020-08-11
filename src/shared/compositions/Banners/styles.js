import styled from 'styled-components'

export const Banners = styled.div`
  width: 100%;
  min-height: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`
