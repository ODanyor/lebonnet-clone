import styled from "styled-components"
import { color } from "shared/utils/styles"

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Skeleton = styled.div`
  position: relative;
  margin: 15px;
  width: calc(25% - 50px);
  background-repeat: no-repeat;
  overflow: hidden;

  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  animation: animateSkeleton 1000ms alternate infinite;

  @keyframes animateSkeleton {
    from {
      background-color: ${color.lightGray};
    }
    to {
      background-color: ${color.gray};
    }
  }
`
