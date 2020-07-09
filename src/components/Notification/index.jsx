import React, { useState, useEffect } from "react"
import { Notification } from "./styles"

const index = (props) => {
  const { message, clearMessage, cart } = props
  const [properties, setProperties] = useState({
    position: "-100%",
    backgroundColor: "green",
  })
  useEffect(() => {
    if (message !== "") {
      setProperties({
        position: "0",
        backgroundColor: message === "Product was deleted." ? "red" : "green",
      })
      setTimeout(() => {
        setProperties({
          position: "-100%",
        })
        clearMessage()
      }, 3000)
    }
  }, [cart])

  return <Notification show={properties}>{message}</Notification>
}

export default index
