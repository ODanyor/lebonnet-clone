import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const Category = styled.div`
  padding: 20px;
`

export const CategoryImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${color.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const CategoryTitle = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  ${font.size(14)};
  ${font.light};
`
