import styled from 'styled-components'
import { color, font } from 'shared/utils/styles'

export const Navbar = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  align-items: center;
`

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;

  ${font.size(13)};
  letter-spacing: 1.3px;
`

export const NavbarLink = styled.li`
  text-transform: uppercase;
  padding: 5px;
`

export const NavbarLinkUnderline = styled.div`
  width: 0;
  height: 2px;
  background-color: ${color.black};
  transition: width var(--transition);
`
