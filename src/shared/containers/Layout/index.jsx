import React, { useState } from "react"
import { useSelector } from "react-redux"
import { ForNewsletter, Notification } from "shared/components"
import {
  NavbarComposition,
  CartWithBackground,
  FooterWithCopyright,
} from "shared/compositions"

function Index({ children }) {
  const [showcart, setShowcart] = useState(false)
  const toggle = () => setShowcart((prevState) => !prevState)

  const cart = useSelector((state) => state.products.cart)

  return (
    <React.Fragment>
      <Notification />
      <NavbarComposition trigger={toggle} cartLength={cart.length} />
      <CartWithBackground trigger={toggle} show={showcart} cart={cart} />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  )
}

export default Index
