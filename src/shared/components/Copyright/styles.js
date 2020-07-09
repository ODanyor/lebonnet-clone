import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Copyright = styled.div`
  padding: 50px 0;
  border-top: 1px solid ${color.gray};
  display: flex;
  justify-content: center;
  ${font.size(13)};
  ${font.bold};
`
