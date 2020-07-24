import React, { useEffect, useState, useReducer } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "store/actions/productActions"
import {
  Cart,
  DistanceBetween,
  ItemsContainer,
  CartItemContainer,
  ControllerContainer,
  SquareButton,
} from "./styles"
import { Title, Text, Button } from "shared/components"

import deleteIcon from "shared/assets/icons/delete.png"

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

const Controller = ({ quantity }) => {
  const [count, setCount] = useState(null)
  const [state, dispatch] = useReducer(function (state, action) {
    switch (action.type) {
      case "increment":
        return setCount((prevState) => prevState + 1)
      case "decrement":
        return setCount((prevState) => prevState - 1)
      default:
        throw new Error()
    }
  }, count)

  useEffect(() => {
    setCount(quantity)
  }, [quantity])

  return (
    <ControllerContainer>
      <Text>Quantity: </Text>
      <div>
        <Button>
          <SquareButton>+</SquareButton>
        </Button>
        <Text margin="5px 0" center={true}>
          {count}
        </Text>
        <Button>
          <SquareButton>-</SquareButton>
        </Button>
      </div>
    </ControllerContainer>
  )
}

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <img alt="img" src={item.product.photo_1} width="100%" height="auto" />
      <div>
        <Button>
          <img alt="trash" src={deleteIcon} width="25px" height="auto" />
        </Button>
        <Text>{item.product.name.split(" - ")[0]}</Text>
        <Text>€{item.product.price.toFixed(2)}</Text>
        <Text>Color: {item.product.name.split(" - ")[1]}</Text>
        <Controller quantity={item.quantity} />
      </div>
    </CartItemContainer>
  )
}

const CartItems = ({ cart, products }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length <= 1) {
      dispatch(getProducts())
    }
    // eslint-disable-next-line
  }, [products])

  return products.length <= 1 ? (
    <p>Loading ...</p>
  ) : (
    cart.map((item, index) => {
      const foundItem = products.find(
        (product) => product.id === item.productId
      )
      return (
        <CartItem
          key={index}
          item={{ ...foundItem, quantity: item.quantity }}
        />
      )
    })
  )
}

const Index = ({ show, trigger, ...rest }) => {
  return (
    <Cart show={show}>
      <CartHead trigger={trigger} />
      <ItemsContainer>
        <CartItems {...rest} />
      </ItemsContainer>
    </Cart>
  )
}

export default Index
