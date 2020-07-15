import React, { useState } from "react"
import { Product } from "./styles"

// HOC
import { withLoading } from "shared/hoc/withLoading"

// Components
import { Link } from "shared/components"

const Index = ({ product, img }) => {
  const [mainImg, setMainImg] = useState(img)

  const image = new Image()
  image.src = product.product.photo_1
  image.onload = () => setMainImg(image.src)

  return (
    <Product img={mainImg}>
      <Link to={`/products/${product.id}`}>
        <img
          alt="hoverImg"
          src={product.product.photo_2}
          width="100%"
          height="auto"
        />
      </Link>
      <button>Add to cart €{product.product.price.toFixed(2)}</button>
    </Product>
  )
}
Index.displayName = "Cart"

export default withLoading(Index)
