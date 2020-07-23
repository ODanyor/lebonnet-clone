import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearMessage } from "store/actions/productActions"
import { Text } from "shared/components"
import { Notification } from "./styles"

const Index = () => {
  const notificationRef = useRef(null)
  const { message } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  async function showNotification(show) {
    notificationRef.current.style.transform = show
      ? "translateY(0)"
      : "translateY(-100%)"
  }

  useEffect(() => {
    if (message && notificationRef.current) {
      showNotification(true)
      setTimeout(() => {
        showNotification(false).then(function () {
          setTimeout(function () {
            dispatch(clearMessage())
            // 500ms is the root transation time
          }, 500)
        })
      }, 3000)
    }
    // eslint-disable-next-line
  }, [message])

  return (
    <Notification
      ref={notificationRef}
      added={message === "Product was added."}
    >
      <Text color="white">{message}</Text>
    </Notification>
  )
}

export default Index
