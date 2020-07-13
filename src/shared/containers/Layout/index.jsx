import React, { useState } from "react"

// Components
import { ForNewsletter, Cart } from "shared/components"

// Compositions
import { NavbarComposition, FooterWithCopyright } from "shared/compositions"

const Index = ({ children }) => {
  const [showcart, setShowcart] = useState(false)
  const toggle = () => setShowcart((prevState) => !prevState)

  return (
    <React.Fragment>
      <NavbarComposition trigger={toggle} />
      <Cart trigger={toggle} show={showcart} />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  )
}

export default Index
