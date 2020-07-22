import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// Redux
import { getProduct, addToCart } from "store/actions/productActions"

// Components
import { Helmet } from "react-helmet"

// Containers
import { Product } from "shared/containers"

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

  return product ? (
    <React.Fragment>
      <Helmet>
        <title>LeBonnet(clone) - Product: {product.name}</title>
      </Helmet>

      <Product product={product} addToCart={addToCart} />
    </React.Fragment>
  ) : (
    <h1>Skeleton ...</h1>
  )
}

export default Index
