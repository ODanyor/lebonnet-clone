import React, { useEffect } from "react"

// Hooks
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function Index() {
  const { id } = useParams()
  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    const found = products.some((product) => product.id === id)
    if (!found) console.log("REQUEST TO GET PRODUCT: " + id)
    // THEN STORE THE PRODUCT IN THE STORE
  }, [id, products])

  return (
    <div>
      <h1>Product page</h1>
    </div>
  )
}

export default Index
