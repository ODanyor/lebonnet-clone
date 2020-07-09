import React from "react"

// Components
import { ForNewsletter } from "shared/components"

// Compositions
import { NavbarComposition, FooterWithCopyright } from "shared/compositions"

const index = ({ children }) => {
  return (
    <div>
      <NavbarComposition />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </div>
  )
}

export default index
