import React, { useState } from "react"

// Components
import { ForNewsletter } from "shared/components"

// Compositions
import {
  NavbarComposition,
  CartWithBackground,
  FooterWithCopyright,
} from "shared/compositions"

const Index = ({ children }) => {
  const [showcart, setShowcart] = useState(false)
  const toggle = () => setShowcart((prevState) => !prevState)

  return (
    <React.Fragment>
      <NavbarComposition trigger={toggle} />
      <CartWithBackground trigger={toggle} show={showcart} />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  )
}

export default Index
