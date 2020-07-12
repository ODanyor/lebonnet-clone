import React, { useState } from "react"
import { Product } from "./styles"

// HOC
import { withLoading } from "shared/hoc/withLoading"

const Index = ({ product, img }) => {
  const [mainImg, setMainImg] = useState(img)

  const image = new Image()
  image.src = product.product.photo_1
  image.onload = () => setMainImg(product.product.photo_1)

  return (
    <Product img={mainImg}>
      <button>Add to cart €{product.product.price.toFixed(2)}</button>
    </Product>
  )
}

export default withLoading(Index)
