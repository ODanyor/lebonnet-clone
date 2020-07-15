import React from "react"
import { WithScrollbar } from "./styles"

// Components
import { Scrollbar } from "shared/components"

const index = ({ children }) => {
  return (
    <WithScrollbar>
      <Scrollbar />
      {children}
    </WithScrollbar>
  )
}

export default index
