import React from 'react'
import { Menu, MenuItemContainer } from './styles'
import { menu, home, user, pack } from 'shared/assets/icons'

const items = [{ img: menu }, { img: home }, { img: user }, { img: pack }]

export default function index() {
  return (
    <Menu>
      <MenuItems />
    </Menu>
  )
}

function MenuItems() {
  return items.map((item, index) => <MenuItem key={index} item={item} />)
}

function MenuItem({ item }) {
  return (
    <MenuItemContainer>
      <img alt='menu-icon' src={item.img} width='17px' height='17px' />
    </MenuItemContainer>
  )
}
