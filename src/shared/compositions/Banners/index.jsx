import React from "react"
import { Banners } from "./styles"

const index = ({ left, right }) => {
  return (
    <Banners>
      {left}
      {right}
    </Banners>
  )
}
index.displayName = "Banners"

export default index
