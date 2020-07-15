import React from "react"
import { Button } from "./styles"

const FormButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>
}

export default FormButton
