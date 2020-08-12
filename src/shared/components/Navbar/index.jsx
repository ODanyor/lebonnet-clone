import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, NavbarLinks, NavbarLink, NavbarLinkUnderline } from './styles'
import { useDispatch } from 'react-redux'
import { logOut } from 'store/actions/userActions'

// Images
import logo from 'shared/assets/logo.svg'

// Components
import { Link, Button } from 'shared/components'

// Navigation links
const leftLinks = [
  { to: '/products#beanies', content: 'Beanies' },
  { to: '/products#scarves', content: 'Scarves' },
  { to: '/products#gloves', content: 'Gloves' },
  { to: '/products#exclusives', content: 'Exclusives' },
]
const rightLinks = [{ to: '/account', content: 'Account' }]

const LinkItem = ({ link }) => {
  const { to, content } = link
  const linkRef = useRef(null)

  return (
    <Link to={to}>
      <NavbarLink
        onMouseOver={() => (linkRef.current.style.width = '100%')}
        onMouseLeave={() => (linkRef.current.style.width = '0%')}
      >
        {content}
        <NavbarLinkUnderline ref={linkRef} />
      </NavbarLink>
    </Link>
  )
}

const LinkItems = ({ links }) => {
  return links.map((link, index) => <LinkItem key={index} link={link} />)
}

function AuthButtons({ authenticated, trigger, cartLength }) {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    authenticated && (
      <React.Fragment>
        <Button onClick={trigger}>
          <NavbarLink>Cart({cartLength})</NavbarLink>
        </Button>
        <Button onClick={() => dispatch(logOut(history))}>
          <NavbarLink>Log out</NavbarLink>
        </Button>
      </React.Fragment>
    )
  )
}

const index = ({ trigger, cartLength, authenticated }) => {
  return (
    <Navbar>
      <NavbarLinks>
        <LinkItems links={leftLinks} />
      </NavbarLinks>
      <Link to='/'>
        <NavbarLinks>
          <img alt='logo' src={logo} />
        </NavbarLinks>
      </Link>
      <NavbarLinks>
        <LinkItems links={rightLinks} />
        <AuthButtons
          trigger={trigger}
          cartLength={cartLength}
          authenticated={authenticated}
        />
      </NavbarLinks>
    </Navbar>
  )
}
index.displayName = 'Navbar'

export default index
