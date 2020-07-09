import React from "react"
import { Button } from "./styles"

const FormButton = (props) => {
  const { children, ...rest } = props
  return <Button {...rest}>{children}</Button>
}

export default FormButton
