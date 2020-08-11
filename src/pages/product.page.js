import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Spinner } from 'shared/components'
import { Product } from 'shared/containers'
import { useWindowScrollToTop } from 'shared/hooks'
import { getProduct, addProductToCart } from 'store/actions/productActions'

function Index() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { products } = useSelector((state) => state.products)
  const foundProduct = products.find((product) => product.id === id)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!foundProduct) dispatch(getProduct(id))
    else setProduct(foundProduct.product)
    // eslint-disable-next-line
  }, [foundProduct])

  useWindowScrollToTop()

  return product ? (
    <React.Fragment>
      <Helmet>
        <title>LeBonnet(clone) - Product: {product.name}</title>
      </Helmet>

      <Product product={product} addToCart={addProductToCart} />
    </React.Fragment>
  ) : (
    <Spinner />
  )
}

export default Index
