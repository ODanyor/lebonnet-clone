import React from "react"
import { Cart, DistanceBetween, ItemsContainer } from "./styles"

// Components
import { Title, Button } from "shared/components"

const CartHead = ({ trigger }) => (
  <DistanceBetween padding="25px 0">
    <Title colored={true} size={45}>
      Cart
    </Title>
    <Button onClick={trigger}>
      <Title colored={true} size={40}>
        &times;
      </Title>
    </Button>
  </DistanceBetween>
)

const CartItem = () => <div>Product</div>

const CartItems = ({ cart }) => (
  <ItemsContainer>
    {cart.map((item, index) => (
      <CartItem key={index} item={item} />
    ))}
  </ItemsContainer>
)

const index = ({ show, trigger, ...rest }) => {
  return (
    <Cart show={show}>
      <CartHead trigger={trigger} />
      <CartItems {...rest} />
    </Cart>
  )
}

export default index
