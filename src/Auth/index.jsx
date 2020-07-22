import React from "react"
import { Redirect } from "react-router-dom"
import { useIsAuthenticated } from "shared/hooks"

const Index = () => {
  useIsAuthenticated()
  return <Redirect to="/" />
}

export default Index
