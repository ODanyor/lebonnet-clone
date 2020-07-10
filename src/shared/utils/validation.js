export const is = {
  Password: (pass) => {
    const regExp = /^.{8,}$/
    return pass.match(regExp)
  },
  Email: (email) => {
    const regExp = /^.+@\w*[.]+[a-z]+$/
    return email.match(regExp)
  },
  NullOrEmpty: (value) => {
    return value === "" || value === null
  },
}

export const credentialValidation = (object) => {
  let errors = {}
  for (let key in object) {
    if (key === "email") {
      if (!is.Email(object[key])) {
        errors.email = "Must be a valid email address."
      }
    }
    if (key === "password") {
      if (!is.Password(object[key])) {
        errors.password = "Password must be at least of 8 characters."
      }
    }
    if (key === "confirmPassword") {
      if (object["password"] !== object[key]) {
        errors.confirmPassword = "Password does not match."
      }
    }
  }
  return { errors }
}
