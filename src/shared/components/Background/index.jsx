import React from "react"
import { Background } from "./styles"

const Index = ({ trigger, show }) => {
  return <Background onClick={trigger} show={show} />
}
Index.displayName = "Background"

export default Index
