import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from 'store/actions/userActions'
import { Banners } from 'shared/compositions'
import { Box } from 'shared/containers'
import { Helmet } from 'react-helmet'
import { Form, Title, Text } from 'shared/components'
import { credentialValidation } from 'shared/utils/validation'

import boy from 'shared/assets/images/boy.jpg'

const forms = {
  loginForm: {
    title: 'Registered customers',
    fields: [
      {
        name: 'email',
        placeholder: 'Email',
        type: 'text',
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
      },
    ],
  },
  registerForm: {
    title: 'New customers',
    fields: [
      {
        name: 'email',
        placeholder: 'Email',
        type: 'text',
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        placeholder: 'Confirm password',
        type: 'password',
      },
    ],
  },
}

function index() {
  return (
    <React.Fragment>
      <AccountHeader />
      <AccountContent />
    </React.Fragment>
  )
}

function AccountHeader() {
  return (
    <Helmet>
      <title>Account</title>
    </Helmet>
  )
}

function AccountContent() {
  const authenticated = useSelector((state) => state.user.authenticated)
  const [validationErrors, setValidationErrors] = useState({})

  const history = useHistory()
  const dispatch = useDispatch()

  const login = (credentials) => {
    const { errors } = credentialValidation(credentials)
    if (Object.keys(errors).length > 0) {
      setValidationErrors({ login: errors })
    } else {
      setValidationErrors({})
      dispatch(signIn(credentials, history))
    }
  }
  const register = (credentials) => {
    const { errors } = credentialValidation(credentials)
    if (Object.keys(errors).length > 0) {
      setValidationErrors({ register: errors })
    } else {
      setValidationErrors({})
      dispatch(signUp(credentials, history))
    }
  }

  return authenticated ? (
    <Banners
      left={
        <Box margin='auto'>
          <Title colored={true}>Welcome</Title>
        </Box>
      }
      right={
        <Box margin='auto' padding='25px'>
          <Text center={true}>
            Dit is uw account waarmee u uw recente aankoop activiteiten kunt
            controleren en uw persoonlijke gegevens kunt bijwerken. Selecteer
            dit tabblad hieronder om informatie te bekijken of te bewerken.
          </Text>
        </Box>
      }
    />
  ) : (
    <Banners
      left={
        <Form
          img={boy}
          formItems={forms.loginForm}
          formSubmit={login}
          button='Log in'
          colored={true}
          validationErrors={validationErrors.login}
        />
      }
      right={
        <Form
          formItems={forms.registerForm}
          formSubmit={register}
          button='Create an account'
          colored={false}
          validationErrors={validationErrors.register}
        />
      }
    />
  )
}

export default index
