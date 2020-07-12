import React from "react"
import { Scrollbar } from "./styles"

const products = [
  { to: "#beanies", content: "Beanies" },
  { to: "#scarves", content: "Scarves" },
  { to: "#gloves", content: "Gloves" },
  { to: "#exclusives", content: "Exclusives" },
]

const index = () => {
  return (
    <Scrollbar>
      {products.map((product, index) => (
        <li key={index}>
          <a href={product.to}>{product.content}</a>
        </li>
      ))}
    </Scrollbar>
  )
}

export default index
