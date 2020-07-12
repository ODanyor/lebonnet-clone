import React, { forwardRef } from "react"
import { Input } from "./styles"

const FormInput = forwardRef((props, ref) => {
  const { errors, name, placeholder, ...rest } = props

  return (
    <Input
      {...rest}
      name={name}
      ref={ref}
      placeholder={errors[name] ? errors[name].message : placeholder}
      error={errors[name]}
    />
  )
})

export default FormInput
