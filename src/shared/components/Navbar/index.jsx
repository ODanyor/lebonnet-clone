import React, { useRef } from "react"
import { Navbar, NavbarLinks, NavbarLink, NavbarLinkUnderline } from "./styles"

// Images
import logo from "shared/assets/logo.svg"

// Components
import { Link, Button } from "shared/components"

// Navigation links
const leftLinks = [
  { to: "/products#beanies", content: "Beanies" },
  { to: "/products#scarves", content: "Scarves" },
  { to: "/products#gloves", content: "Gloves" },
  { to: "/products#exclusives", content: "Exclusives" },
]
const rightLinks = [{ to: "/account", content: "Account" }]

const LinkItem = ({ link }) => {
  const { to, content } = link
  const linkRef = useRef(null)

  return (
    <Link to={to}>
      <NavbarLink
        onMouseOver={() => (linkRef.current.style.width = "100%")}
        onMouseLeave={() => (linkRef.current.style.width = "0%")}
      >
        {content}
        <NavbarLinkUnderline ref={linkRef} />
      </NavbarLink>
    </Link>
  )
}

const LinkItems = ({ links }) =>
  links.map((link, index) => <LinkItem key={index} link={link} />)

const index = ({ trigger, cartLength }) => {
  return (
    <Navbar>
      <NavbarLinks>
        <LinkItems links={leftLinks} />
      </NavbarLinks>
      <Link to="/">
        <NavbarLinks>
          <img alt="logo" src={logo} />
        </NavbarLinks>
      </Link>
      <NavbarLinks>
        <LinkItems links={rightLinks} />
        <Button onClick={trigger}>
          <NavbarLink>Cart({cartLength})</NavbarLink>
        </Button>
      </NavbarLinks>
    </Navbar>
  )
}
index.displayName = "Navbar"

export default index
