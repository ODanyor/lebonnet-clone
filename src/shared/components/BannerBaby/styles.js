import styled from "styled-components"
import { color, font } from "shared/utils/styles"

export const Banner = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;

  span {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: ${color.red};
    ${font.size(13)};
  }
`
