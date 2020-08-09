import React from 'react'
import { Link, Button } from 'shared/components'
import { Menu, MenuItemContainer } from './styles'
import { menu, home, user, pack } from 'shared/assets/icons'

const items = [
  { img: menu },
  { img: home, to: '/' },
  { img: user, to: '/account' },
  { img: pack },
]

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
  return item.to ? (
    <MenuItemContainer>
      <Link block='true' to={item.to}>
        <img alt='menu-icon' src={item.img} width='17px' height='17px' />
      </Link>
    </MenuItemContainer>
  ) : (
    <MenuItemContainer>
      <Button block={true} onClick={() => console.log('Clicked ...')}>
        <img alt='menu-icon' src={item.img} width='17px' height='17px' />
      </Button>
    </MenuItemContainer>
  )
}
