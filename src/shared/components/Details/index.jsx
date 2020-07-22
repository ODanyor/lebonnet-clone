import React, { useReducer } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Details, Buttons, CounterButtons, AddButton } from "./styles"

// Components
import { Title, Text, Button } from "shared/components"

// Containers
import { Box } from "shared/containers"

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

const Controllers = ({ price, addToCart }) => {
  const { id } = useParams()
  const history = useHistory()
  const authenticated = useSelector((state) => state.user.authenticated)
  const dispatchToStore = useDispatch()

  const addButtonHandle = () => {
    if (authenticated) {
      dispatchToStore(addToCart({ productId: id, quantity: state.count }))
    } else {
      history.push("/account")
    }
  }

  const initialState = { count: 1 }
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count < 20 ? state.count + 1 : state.count }
      case "decrement":
        return { count: state.count > 1 ? state.count - 1 : state.count }
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
      <AddButton onClick={addButtonHandle}>
        Add to cart €{(state.count * price).toFixed(2)}
      </AddButton>
    </Buttons>
  )
}

const Info = ({ info }) => (
  <Box padding="20px 0px">
    <Text size={19} bold={true} uppercase={true}>
      Product info
    </Text>

    <Box>
      {info.map(
        (item, index) =>
          item.value !== "" && (
            <Text key={index} size={13} margin="10px 0">
              {item.title}: {item.value}
            </Text>
          )
      )}
    </Box>
  </Box>
)

const index = (props) => {
  const {
    name,
    price,
    description,
    fabric,
    fit,
    size,
    treatment,
    addToCart,
  } = props
  const productInfo = [
    { title: "Fabric", value: fabric },
    { title: "Fit", value: fit },
    { title: "Size", value: size },
    { title: "Treatment", value: treatment },
  ]

  return (
    <Details>
      <TitleNamePrice name={name} price={price} />
      <Description description={description} />
      <Controllers price={price} addToCart={addToCart} />
      <Info info={productInfo} />
    </Details>
  )
}

export default index
