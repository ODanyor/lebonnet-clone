import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { signIn, signUp } from "store/actions/userActions"
import { Banners } from "shared/compositions"
import { Helmet } from "react-helmet"
import { Form } from "shared/components"
import { credentialValidation } from "shared/utils/validation"

import boy from "shared/assets/images/boy.jpg"

const forms = {
  loginForm: {
    title: "Registered customers",
    fields: [
      {
        name: "email",
        placeholder: "Email",
        type: "text",
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
      },
    ],
  },
  registerForm: {
    title: "New customers",
    fields: [
      {
        name: "email",
        placeholder: "Email",
        type: "text",
      },
      {
        name: "password",
        placeholder: "Password",
        type: "password",
      },
      {
        name: "confirmPassword",
        placeholder: "Confirm password",
        type: "password",
      },
    ],
  },
}

function Index() {
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

  return (
    <React.Fragment>
      <Helmet>
        <title>Account</title>
      </Helmet>

      <Banners
        left={
          <Form
            img={boy}
            formitems={forms.loginForm}
            formSubmit={login}
            button="Log in"
            colored={true}
            validationErrors={validationErrors.login}
          />
        }
        right={
          <Form
            formitems={forms.registerForm}
            formSubmit={register}
            button="Create an account"
            colored={false}
            validationErrors={validationErrors.register}
          />
        }
      />
    </React.Fragment>
  )
}

export default Index
