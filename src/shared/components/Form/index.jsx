import React from "react"
import { FormContainer, Form } from "./styles"

// Hooks
import { useForm } from "react-hook-form"

// Components
import { Title } from "shared/components"

// Modules
import FormInput from "./FormInput"
import FormButton from "./FormButton"

const Index = (props) => {
  const { img, formitems, formSubmit, button, colored } = props

  const { register, handleSubmit } = useForm()

  const submit = (credentials) => {
    formSubmit(credentials)
  }

  return (
    <FormContainer img={img}>
      <Form onSubmit={handleSubmit(submit)}>
        <Title colored={!colored}>{formitems.title}</Title>

        {formitems.fields.map((input, index) => (
          <FormInput key={index} {...input} colored={colored} ref={register} />
        ))}

        <FormButton colored={colored} type="submit">
          {button}
        </FormButton>
      </Form>
    </FormContainer>
  )
}

export default Index
