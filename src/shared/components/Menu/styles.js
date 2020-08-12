import styled from 'styled-components'
import { color } from 'shared/utils/styles'

export const Menu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1000;
`

export const MenuItemContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.lightGray};
`

export const MenuContentContainer = styled.div`
  height: 196px;
  position: fixed;
  margin-bottom: 46px;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${color.white};
  transition: transform var(--transition);
  ${(props) =>
    props.show ? 'transform: translateY(0);' : 'transform: translateY(100%);'}
`

export const MenuContentContainerUL = styled.ul`
  padding: 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
