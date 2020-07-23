import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "store/actions/productActions"
import { Product } from "./styles"

// Components
import { Link } from "shared/components"
import { useHistory } from "react-router-dom"

const Index = ({ product, img }) => {
  const history = useHistory()
  const dispatchToStore = useDispatch()
  const store = useSelector((state) => state)
  const authenticated = store.user.authenticated
  const requested = store.products.requested
  const [mainImg, setMainImg] = useState(img)

  const image = new Image()
  image.src = product.product.photo_1
  image.onload = () => setMainImg(image.src)

  const addButtonHandle = () => {
    if (authenticated) {
      dispatchToStore(addToCart({ id: product.id, quantity: 1 }))
    } else {
      history.push("/account")
    }
  }

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
      <button onClick={addButtonHandle} disabled={requested}>
        {requested
          ? "Loading ..."
          : `Add to cart €${product.product.price.toFixed(2)}`}
      </button>
    </Product>
  )
}
Index.displayName = "Cart"

export default Index
