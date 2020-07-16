import React from "react"

// Components
import { Title } from "shared/components"

const index = ({ product }) => {
  const { name } = product
  return (
    <div>
      <Title size={55} colored={true}>
        {name}
      </Title>
    </div>
  )
}

export default index
