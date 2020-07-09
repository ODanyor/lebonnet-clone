import React from "react"
import { Cart } from "./styles"

// Components
import { CartItem } from "components/CartItem"
import { Background } from "components/Background"

const index = () => {
  let style = "CartContainer CartClose"
  if (props.open) {
    style = "CartContainer CartOpen"
  }

  let products = props.products
  let items = []
  let total = 0

  props.cart.forEach((element) => {
    products.forEach((product) => {
      if (element.productId === product.id) {
        items.push({
          ...product,
          quantity: element.quantity,
        })
      }
    })
  })
  items.forEach((item) => {
    total = total + item.quantity * item.product.price
  })
  return (
    <Cart>
      {props.open ? <Background trigger={props.trigger} /> : null}
      <div className={style}>
        <div className="CartHeader">
          <div>Cart</div>
          <div className="CloseContainer">
            <div className="Close" onClick={props.trigger}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="CartItemsContainer">
          {items.map((item) => (
            <CartItem key={item.id} item={item} trigger={props.trigger} />
          ))}
        </div>
        <div className="CartFooter">
          <div>Total</div>
          <div>€{total}</div>
        </div>
        <div className="Continue" onClick={props.trigger}>
          <button>Back to shopping</button>
        </div>
      </div>
    </Cart>
  )
}

export default index
