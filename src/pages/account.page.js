import React from "react"

// Compositions
import { Banners } from "shared/compositions"

// Components
import { Form } from "shared/components"

// Images

const loginForm = [
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
]

const registerForm = [
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
]

function index() {
  return (
    <div>
      <Banners
        left={<Form formitems={loginForm} />}
        right={<Form formitems={registerForm} />}
      />
    </div>
  )
}

export default index
