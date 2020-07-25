import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  getProducts,
  deleteProductFromCart,
} from "store/actions/productActions"
import { Title, Text, Button } from "shared/components"
import deleteIcon from "shared/assets/icons/delete.png"

import {
  Cart,
  DistanceBetween,
  ItemsContainer,
  CartItemContainer,
  ControllerContainer,
  SquareButton,
} from "./styles"

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

const Controller = ({ show, quantity, id }) => {
  const [count, setCount] = useState(null)
  // const dispatch = useDispatch()

  const increment = () => {
    if (count < 20) {
      setCount((prevState) => {
        return prevState + 1
      })
    }
  }
  const decrement = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1)
    }
  }

  useEffect(() => {
    setCount(quantity)
  }, [quantity])

  return (
    <ControllerContainer>
      <Text uppercase={true}>Quantity: </Text>
      <div>
        <Button onClick={increment}>
          <SquareButton>+</SquareButton>
        </Button>
        <Text margin="5px 0" center={true}>
          {count}
        </Text>
        <Button onClick={decrement}>
          <SquareButton>-</SquareButton>
        </Button>
      </div>
    </ControllerContainer>
  )
}

const CartItem = ({ item, show }) => {
  const dispatch = useDispatch()
  return (
    <CartItemContainer>
      <img alt="img" src={item.product.photo_1} width="100%" height="auto" />
      <div>
        <Button onClick={() => dispatch(deleteProductFromCart(item.id))}>
          <img alt="trash" src={deleteIcon} width="25px" height="auto" />
        </Button>
        <Text uppercase={true} bold={true} margin="1rem 0">
          {item.product.name.split(" - ")[0]}
        </Text>
        <Text>€{item.product.price.toFixed(2)}</Text>
        <Text uppercase={true} bold={true} size={11}>
          Color: {item.product.name.split(" - ")[1]}
        </Text>
        <Controller show={show} quantity={item.quantity} id={item.id} />
      </div>
    </CartItemContainer>
  )
}

const CartItems = ({ cart, products, show }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length <= 1) dispatch(getProducts())
    // eslint-disable-next-line
  }, [products])

  return (
    products.length > 1 &&
    cart.map((item, index) => {
      const foundItem = products.find(
        (product) => product.id === item.productId
      )
      return (
        <CartItem
          key={index}
          show={show}
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
        <CartItems show={show} {...rest} />
      </ItemsContainer>
    </Cart>
  )
}

export default Index
