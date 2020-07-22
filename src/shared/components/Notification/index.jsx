import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Notification } from "./styles"

const Index = () => {
  const notificationRef = useRef(null)
  const { message } = useSelector((state) => state.user)

  useEffect(() => {
    if (message && notificationRef.current) {
      console.log("REF", notificationRef.current)
      setTimeout(() => {
        console.log("REF", notificationRef.current)
      }, 3000)
    }
  }, [message])

  return <Notification ref={notificationRef}>{message}</Notification>
}

export default Index
