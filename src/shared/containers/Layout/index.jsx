import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHandleWindowWidth } from 'shared/hooks'
import { ForNewsletter, Notification, Menu } from 'shared/components'
import {
  NavbarComposition,
  CartWithBackground,
  FooterWithCopyright,
} from 'shared/compositions'

function Index({ children }) {
  const [showcart, setShowcart] = useState(false)
  const toggle = () => setShowcart((prevState) => !prevState)

  const store = useSelector((state) => state.products)
  const cart = store.cart
  const products = store.products

  return (
    <React.Fragment>
      <Notification />
      <NavbarComposition trigger={toggle} cartLength={cart.length} />
      <CartWithBackground
        trigger={toggle}
        show={showcart}
        cart={cart}
        products={products}
      />
      {children}

      {useHandleWindowWidth() >= 900 ? (
        <React.Fragment>
          <ForNewsletter />
          <FooterWithCopyright />
        </React.Fragment>
      ) : (
        <Menu trigger={toggle} />
      )}
    </React.Fragment>
  )
}

export default Index
