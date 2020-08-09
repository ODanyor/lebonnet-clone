import React from 'react'
import { Link, Button } from 'shared/components'
import { Menu, MenuItemContainer } from './styles'
import { menu, home, user, pack } from 'shared/assets/icons'

export default function index({ trigger }) {
  const items = [
    { img: menu },
    { img: home, to: '/' },
    { img: user, to: '/account' },
    { img: pack, onClick: trigger },
  ]

  return (
    <Menu>
      <MenuItems items={items} />
    </Menu>
  )
}

function MenuItems({ items }) {
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
      <Button block={true} onClick={item.onClick}>
        <img alt='menu-icon' src={item.img} width='17px' height='17px' />
      </Button>
    </MenuItemContainer>
  )
}
