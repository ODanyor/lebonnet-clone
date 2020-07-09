import React from "react"

// Compositions
import { Banners } from "shared/compositions"

// Components
import { Form } from "shared/components"

// Images
import boy from "shared/assets/images/boy.jpg"

const forms = {
  loginForm: [
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
  registerForm: [
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
}

function index() {
  const login = (credentials) => console.log(credentials)
  const register = (credentials) => console.log(credentials)
  return (
    <Banners
      left={
        <Form
          img={boy}
          formitems={forms.loginForm}
          formSubmit={login}
          buttonValue="Log in"
        />
      }
      right={
        <Form
          formitems={forms.registerForm}
          formSubmit={register}
          buttonValue="Create an account"
        />
      }
    />
  )
}

export default index
