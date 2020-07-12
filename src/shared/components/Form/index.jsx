import React from "react"
import { FormContainer, Form, Message } from "./styles"

// Hooks
import { useForm } from "react-hook-form"

// Components
import { Title } from "shared/components"

// Modules
import FormInput from "./FormInput"
import FormButton from "./FormButton"

const Index = (props) => {
  const {
    img,
    formitems,
    formSubmit,
    button,
    colored,
    validationErrors,
  } = props

  const { register, setValue, errors, handleSubmit } = useForm()

  const submit = (credentials) => formSubmit(credentials)

  return (
    <FormContainer img={img}>
      <Form onSubmit={handleSubmit(submit)}>
        <Title centered={true} colored={!colored}>
          {formitems.title}
        </Title>

        {formitems.fields.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            colored={colored}
            ref={register({
              required: `${input.name} is required`,
            })}
            setValue={setValue}
            errors={errors}
          />
        ))}

        {validationErrors &&
          Object.keys(validationErrors).map((error, index) => (
            <Message key={index}>{validationErrors[error]}</Message>
          ))}
        <FormButton colored={colored} type="submit">
          {button}
        </FormButton>
      </Form>
    </FormContainer>
  )
}

export default Index
