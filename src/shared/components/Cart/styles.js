import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const Cart = styled.div`
  position: fixed;
  padding: 20px;
  top: 0;
  right: 0;
  width: 520px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  transition: transform var(--transition);
  transform: translateX(${(props) => (!props.show ? '100%' : '0')});
  z-index: 1200;

  @media screen and (max-width: 700px) {
    & {
      width: 100%;
    }
  }
`
export const DistanceBetween = styled.div`
  ${(props) => (props.margin ? `margin: ${props.margin}` : null)};
  ${(props) => (props.padding ? `padding: ${props.padding}` : null)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemsContainer = styled.div`
  border-top: 1px solid ${color.gray};
  padding: 10px;
  height: 100%;
  overflow-y: scroll;
`

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ImgContainer = styled.div`
  min-width: 150px;
`

export const ControllerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SquareButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.gray};
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FinalButton = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${color.white};
  border: 1px solid ${color.red};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.red};
  text-transform: uppercase;
  transition: all var(--transition);
  ${font.bold};
  ${font.size(17)};
  &:hover {
    color: ${color.white};
    background-color: ${color.red};
  }
`
