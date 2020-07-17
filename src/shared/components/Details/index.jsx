import React, { useReducer } from "react"
import { Buttons, CounterButtons, AddButton } from "./styles"

// Components
import { Box, Title, Text, Button } from "shared/components"

const TitleNamePrice = ({ name, price }) => (
  <Box>
    <Title size={55} colored={true}>
      {name.split(" - ")[0]}
    </Title>
    <Text>{name}</Text>
    <Text size={25}>€{price.toFixed(2)}</Text>
  </Box>
)

const Description = ({ description }) => (
  <Box padding="20px 0">
    <Text bold={true} italic={true}>
      {description}
    </Text>
  </Box>
)

const Controllers = ({ price }) => {
  const initialState = { count: 0 }
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count < 20 ? state.count + 1 : state.count }
      case "decrement":
        return { count: state.count > 0 ? state.count - 1 : state.count }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Buttons>
      <CounterButtons>
        <Button onClick={() => dispatch({ type: "decrement" })}>
          <Text bold={true} size={19}>
            -
          </Text>
        </Button>
        <Text center={true} size={19}>
          {state.count}
        </Text>
        <Button onClick={() => dispatch({ type: "increment" })}>
          <Text bold={true} size={19}>
            +
          </Text>
        </Button>
      </CounterButtons>
      <AddButton>Add to cart €{(state.count * price).toFixed(2)}</AddButton>
    </Buttons>
  )
}

const index = ({ product }) => {
  const { name, price, description } = product

  return (
    <Box padding="0 50px">
      <TitleNamePrice name={name} price={price} />
      <Description description={description} />
      <Controllers price={price} />
    </Box>
  )
}

export default index
