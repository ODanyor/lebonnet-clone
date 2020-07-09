import React from "react"
import { FormContainer, Form } from "./styles"

// Hooks
import { useForm } from "react-hook-form"

// Modules
import FormInout from "./FormInput"
import FormButton from "./FormButton"

const Index = (props) => {
  const { img, loginforms } = props

  const { register, handleSubmit } = useForm()

  const submit = (credentials) => {
    console.log("CREDENTIALS:", credentials)
  }

  return (
    <FormContainer img={img}>
      <Form onSubmit={handleSubmit(submit)}>
        <FormButton />
      </Form>
    </FormContainer>
  )
}

export default Index
