import React from "react"
import { Link } from "react-router-dom"

const index = (props) => {
  const productId = props.productId
  const addToCart = () => {
    if (props.authenticated) {
      let quantity
      const inCart = () => {
        let foundProduct = false

        props.cart.forEach((product) => {
          if (product.productId === productId) {
            quantity = product.quantity
            foundProduct = true
          }
        })

        return foundProduct
      }

      inCart()
        ? props.addToCart({
            id: productId,
            quantity: quantity + 1,
          })
        : props.addToCart({
            id: productId,
            quantity: 1,
          })
    } else {
      window.location.href = "/account"
    }
  }
  const product = { ...props.product, productId }
  const setProductInState = () => {
    props.setProduct(product)
  }
  return (
    <div className="Item">
      <div className="PictureContainer" onClick={setProductInState}>
        <Link to={`/product`}>
          <img
            className="Main"
            src={product.photo_1}
            alt="Main"
            width="100%"
            height="auto"
          />
          <img
            className="Hover"
            src={product.photo_2}
            alt="Hover"
            width="100%"
            height="auto"
          />
        </Link>
        <div className="AddToCartButton" onClick={addToCart}>
          Add to cart €{product.price}.00
        </div>
      </div>
      <div className="ItemsContent">
        <div>{product.name}</div>
        <div>€{product.price}.00</div>
      </div>
    </div>
  )
}

export default index
