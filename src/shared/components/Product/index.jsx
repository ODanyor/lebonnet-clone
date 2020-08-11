import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from 'store/actions/productActions'
import { ProductMain, Product } from './styles'
import { Box } from 'shared/containers'
import { Link, Text } from 'shared/components'
import { useHistory } from 'react-router-dom'

const Index = ({ product, img }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [mainImg, setMainImg] = useState(img)
  const store = useSelector((state) => state)

  const authenticated = store.user.authenticated
  const requested = store.products.requested

  const image = new Image()
  image.src = product.product.photo_1
  image.onload = () => setMainImg(image.src)

  const addButtonHandle = () => {
    if (authenticated) {
      dispatch(addProductToCart({ id: product.id, quantity: 1 }))
    } else {
      history.push('/account')
    }
  }

  return (
    <ProductMain>
      <ProductSup
        mainImg={mainImg}
        product={product}
        addButtonHandle={addButtonHandle}
        requested={requested}
      />
      <ProductSub name={product.product.name} price={product.product.price} />
    </ProductMain>
  )
}

function ProductSup({ mainImg, product, addButtonHandle, requested }) {
  return (
    <Product img={mainImg}>
      <Link to={`/products/${product.id}`}>
        <img
          alt='hoverImg'
          src={product.product.photo_2}
          width='100%'
          height='auto'
        />
      </Link>
      <ProductSupButton
        addButtonHandle={addButtonHandle}
        requested={requested}
        product={product}
      />
    </Product>
  )
}

function ProductSupButton({ addButtonHandle, requested, product }) {
  return (
    <button onClick={addButtonHandle} disabled={requested}>
      {requested
        ? 'Loading ...'
        : `Add to cart €${product.product.price.toFixed(2)}`}
    </button>
  )
}

function ProductSub({ name, price }) {
  return (
    <Box padding='.5rem 0'>
      <Text center={true} uppercase={true} size={11}>
        {name}
      </Text>
      <Text center={true} size={11}>
        €{price.toFixed(2)}
      </Text>
    </Box>
  )
}

export default Index
