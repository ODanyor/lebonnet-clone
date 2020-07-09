import React from "react"
import { ForNewsletter, SingleForm } from "./styles"

const EmailForm = () => (
  <SingleForm for="email">
    <input type="text" id="email" placeholder="Your email address" />
    <button>Sign up</button>
  </SingleForm>
)

const index = () => {
  return (
    <ForNewsletter>
      <div>
        <h2>Sign up for our newsletter</h2>
        <EmailForm />
      </div>
      <div>
        <h2>Le bonnet</h2>
        <p>
          All products are made in Scotland. All materials are locally sourced
          (UK) or imported from Italy.
        </p>
      </div>
    </ForNewsletter>
  )
}

export default index
