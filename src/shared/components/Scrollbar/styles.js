import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const Scrollbar = styled.ul`
  padding: 5px;
  position: sticky;
  top: 27em;
  transform: rotate(-90deg);
  transform-origin: 2% 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  text-transform: uppercase;
  z-index: 900;
  ${font.size(13)};

  @media screen and (max-width: 900px) {
    & {
      top: 0;
      transform: rotate(0deg);
      background-color: ${color.white};
      padding: 15px;
      border-bottom: 1px solid ${color.lightGray};
    }
  }

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
    }
  }
`
