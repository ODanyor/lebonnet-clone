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
`

export const MenuItemContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.lightGray};
`
