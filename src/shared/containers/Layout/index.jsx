import React, { useState } from "react"

// Hooks
import { useSelector } from "react-redux"

// Components
import { ForNewsletter } from "shared/components"

// Compositions
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
      <NavbarComposition trigger={toggle} cartLength={cart.length} />
      <CartWithBackground trigger={toggle} show={showcart} cart={cart} />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  )
}

export default Index
