import styled from 'styled-components'

export const Product = styled.div`
  padding-top: 113px;
  display: grid;
  grid-template-columns: 1fr 650px;

  @media screen and (max-width: 1000px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`
export const IllustrationsContainer = styled.div`
  @media screen and (max-width: 1000px) {
    & {
      max-height: 100vh;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
`
