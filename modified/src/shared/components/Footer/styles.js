import styled from "styled-components"
import { font } from "shared/utils/styles"

export const Footer = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
`

export const Column = styled.div`
  ${font.size(14)};
  ${font.light};
  line-height: 25px;
`

export const ColumnTitle = styled.div`
  ${font.size(21)};
  ${font.bold};
  padding: 25px 0;
`
