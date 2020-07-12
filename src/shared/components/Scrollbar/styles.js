import styled from "styled-components"
import { font } from "shared/utils/styles"

export const Scrollbar = styled.ul`
  /* margin-top: 15rem; */
  padding: 5px;
  position: sticky;
  top: 27em;
  transform: rotate(-90deg);
  transform-origin: 2% 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  text-transform: uppercase;
  ${font.size(13)};

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
    }
  }
`
