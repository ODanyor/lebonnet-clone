import React from "react"
import { FormContainer, Form, Message } from "./styles"
import { useForm } from "react-hook-form"
import { Title } from "shared/components"
import { useSelector } from "react-redux"
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

  const loading = useSelector((state) => state.user.loading)

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
        <FormButton colored={colored} type="submit" disabled={loading}>
          {loading ? "Loading ..." : button}
        </FormButton>
      </Form>
    </FormContainer>
  )
}

export default Index
