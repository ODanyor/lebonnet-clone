import React, { forwardRef, useEffect } from "react"
import { Input } from "./styles"

const FormInput = forwardRef((props, ref) => {
  const { errors, name, placeholder, ...rest } = props

  useEffect(() => {})

  return (
    <React.Fragment>
      <Input
        {...rest}
        name={name}
        ref={ref}
        placeholder={errors[name] ? errors[name].message : placeholder}
      />
    </React.Fragment>
  )
})

export default FormInput
