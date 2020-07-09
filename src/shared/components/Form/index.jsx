import React from "react"
import { FormContainer, Form } from "./styles"

// Hooks
import { useForm } from "react-hook-form"

// Modules
import FormInput from "./FormInput"
import FormButton from "./FormButton"

const Index = (props) => {
  const { img, formitems, formSubmit, buttonValue } = props

  const { register, handleSubmit } = useForm()

  const submit = (credentials) => {
    formSubmit(credentials)
  }

  return (
    <FormContainer img={img}>
      <Form onSubmit={handleSubmit(submit)}>
        {formitems.map((input, index) => (
          <FormInput key={index} {...input} ref={register} />
        ))}
        <FormButton colored={true} type="submit">
          {buttonValue}
        </FormButton>
      </Form>
    </FormContainer>
  )
}

export default Index
