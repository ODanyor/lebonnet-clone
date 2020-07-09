import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const bin = require("../static/images/delete.png")

const index = (props) => {
  const item = props.item
  const deleteProduct = () => {
    props.deleteProduct(item.id)
    props.trigger()
  }
  const [quantity, setQuantity] = useState(item.quantity)
  useEffect(() => {
    setQuantity(item.quantity)
  }, [item])
  const setProduct = () => {
    const product = {
      ...item.product,
      productId: item.id,
      quantity,
    }
    props.setProduct(product)
    props.trigger()
  }
  const increment = () => {
    if (quantity < 20) {
      setQuantity((prevState) => prevState + 1)
      props.addToCart({ id: item.id, quantity: quantity + 1 })
    }
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1)
      props.addToCart({ id: item.id, quantity: quantity - 1 })
    }
  }
  return (
    <div className="ItemCart">
      <Link className="PhotoContainerCart" onClick={setProduct} to="/product">
        <img
          alt="media"
          src={item.product.photo_1}
          width="100%"
          height="auto"
        />
      </Link>
      <div className="ContentCotainerCart">
        <div className="ItemCategoryCart">
          {item.product.name.split("-")[0]}
        </div>
        <div className="ItemPriceCart">€{item.product.price}.00</div>
        <div className="ItemColorCart">
          Color: {item.product.name.split("-")[1]}
        </div>
        <div className="ItemQuantityCart">
          <div>Quantity:</div>
          <div className="QuntityInputCart">
            <button onClick={increment}>+</button>
            <div>{quantity}</div>
            <button onClick={decrement}>-</button>
          </div>
        </div>
      </div>
      <div className="BinCart" onClick={deleteProduct}>
        <img alt="bin" src={bin} width="25px" height="25px" />
      </div>
    </div>
  )
}

export default index
