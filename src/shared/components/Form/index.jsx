import React from 'react'
import { FormContainer, Form, Message } from './styles'
import { useForm } from 'react-hook-form'
import { useHandleWindowWidth } from 'shared/hooks'
import { Title } from 'shared/components'
import { useSelector } from 'react-redux'
import FormInput from './FormInput'
import FormButton from './FormButton'

const Index = (props) => {
  const {
    img,
    formItems,
    formSubmit,
    button,
    colored,
    validationErrors,
  } = props

  const { register, setValue, errors, handleSubmit } = useForm()
  const loading = useSelector((state) => state.user.loading)
  const submit = (credentials) => formSubmit(credentials)

  return (
    <FormContainer img={img}>
      <Form onSubmit={handleSubmit(submit)}>
        <FormTitle formItems={formItems} colored={colored} />
        <FormInputs
          formItems={formItems}
          colored={colored}
          register={register}
          setValue={setValue}
          errors={errors}
        />
        <FormMessages validationErrors={validationErrors} />
        <FormButton colored={colored} type='submit' disabled={loading}>
          {loading ? 'Loading ...' : button}
        </FormButton>
      </Form>
    </FormContainer>
  )
}

function FormTitle({ colored, formItems }) {
  return (
    <Title
      centered={true}
      colored={!colored}
      size={useHandleWindowWidth() <= 500 ? 45 : null}
    >
      {formItems.title}
    </Title>
  )
}

function FormInputs({ formItems, colored, register, setValue, errors }) {
  return formItems.fields.map((input, index) => (
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
  ))
}

function FormMessages({ validationErrors }) {
  return validationErrors
    ? Object.keys(validationErrors).map((error, index) => (
        <Message key={index}>{validationErrors[error]}</Message>
      ))
    : null
}

export default Index
