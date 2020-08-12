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

  const store = useSelector((state) => state)

  return (
    <React.Fragment>
      <Notification />
      <NavbarComposition
        trigger={toggle}
        cartLength={store.products.cart.length}
        authenticated={store.user.authenticated}
      />
      <CartWithBackground
        trigger={toggle}
        show={showcart}
        cart={store.products.cart}
        products={store.products}
      />
      {children}
      <ResponsivePart toggle={toggle} />
    </React.Fragment>
  )
}

function ResponsivePart({ toggle }) {
  return useHandleWindowWidth() >= 900 ? (
    <React.Fragment>
      <ForNewsletter />
      <FooterWithCopyright />
    </React.Fragment>
  ) : (
    <Menu trigger={toggle} />
  )
}

export default Index
