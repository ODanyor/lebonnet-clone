import React from "react"
import { Main } from "./styles"

// Components
import { Scrollbar } from "shared/components"

const index = ({ children }) => {
  return (
    <Main>
      <Scrollbar />
      {children}
    </Main>
  )
}

export default index
