import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ForNewsletter, Notification, Menu } from 'shared/components'
import {
  NavbarComposition,
  CartWithBackground,
  FooterWithCopyright,
} from 'shared/compositions'

function Index({ children }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [showcart, setShowcart] = useState(false)
  const toggle = () => setShowcart((prevState) => !prevState)

  const store = useSelector((state) => state.products)
  const cart = store.cart
  const products = store.products

  function handleWindowWidth() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => window.removeEventListener('resize', handleWindowWidth)
  })

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

      {width >= 900 ? (
        <React.Fragment>
          <ForNewsletter />
          <FooterWithCopyright />
        </React.Fragment>
      ) : (
        <Menu />
      )}
    </React.Fragment>
  )
}

export default Index
