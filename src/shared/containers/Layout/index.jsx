import React from "react"

// Components
import { ForNewsletter } from "shared/components"

// Compositions
import { NavbarComposition, FooterWithCopyright } from "shared/compositions"

const index = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarComposition />
      {children}
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  )
}

export default index
