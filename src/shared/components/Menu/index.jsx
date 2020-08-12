import React, { useState } from 'react'
import { Link, Button, Text } from 'shared/components'
import {
  Menu,
  MenuItemContainer,
  MenuContentContainer,
  MenuContentContainerUL,
} from './styles'
import { menu, home, user, pack } from 'shared/assets/icons'

export default function Index({ trigger }) {
  const [show, setShow] = useState(false)
  const toggle = () => setShow((prevState) => !prevState)

  const items = [
    { img: menu, onClick: toggle },
    { img: home, to: '/' },
    { img: user, to: '/account' },
    { img: pack, onClick: trigger },
  ]

  return (
    <React.Fragment>
      <Menu>
        <MenuItems items={items} />
      </Menu>
      <MenuContent show={show} trigger={toggle} />
    </React.Fragment>
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

function MenuContent({ show, trigger }) {
  const list = {
    categories: [
      { onClick: trigger, to: '/products#beanies', content: 'Beanies' },
      { onClick: trigger, to: '/products#scarves', content: 'Scarves' },
      { onClick: trigger, to: '/products#gloves', content: 'Gloves' },
      { onClick: trigger, to: '/products#exclusives', content: 'Exclusives' },
    ],
    terms: [
      {
        onClick: trigger,
        to: '/terms&conditions',
        content: 'terms & conditions',
      },
      {
        onClick: trigger,
        to: '/privacy&cookies',
        content: 'privacy & cookies policy',
      },
      {
        onClick: trigger,
        to: '/returns&exchanges',
        content: 'return & exchanges',
      },
      { onClick: trigger, to: '/store', content: 'store locator' },
    ],
  }

  return (
    <MenuContentContainer show={show}>
      <MenuContentList list={list.categories} />
      <MenuContentList list={list.terms} />
    </MenuContentContainer>
  )
}

function MenuContentList({ list }) {
  return (
    <MenuContentContainerUL>
      {list.map((item, index) => (
        <li key={index} onClick={item.onClick}>
          <Link to={item.to}>
            <Text uppercase={true} size={13}>
              {item.content}
            </Text>
          </Link>
        </li>
      ))}
    </MenuContentContainerUL>
  )
}
