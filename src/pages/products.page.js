import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Title } from 'shared/components'
import { WithScrollbar } from 'shared/compositions'
import { Products } from 'shared/containers'
import { getProducts } from 'store/actions/productActions'

import beanie from 'shared/assets/images/loaders/beanie.jpg'
import scarve from 'shared/assets/images/loaders/scarve.jpg'
import gloves from 'shared/assets/images/loaders/gloves.jpg'
import exclusive from 'shared/assets/images/loaders/exclusive.jpg'

const sectionList = [
  { category: 'beanies', img: beanie },
  { category: 'scarves', img: scarve },
  { category: 'gloves', img: gloves },
  { category: 'exclusives', img: exclusive },
]

const Sections = ({ sections, products, loading }) =>
  sections.map(({ category, img }, index) => (
    <section key={index} id={category}>
      <Title centered={true} colored={true}>
        {category}
      </Title>
      <Products
        isLoading={loading}
        products={products.filter((item) => item.product.category === category)}
        category={category}
        img={img}
      />
    </section>
  ))

function Index() {
  const dispatch = useDispatch()
  const { loading, products } = useSelector((state) => state.products)
  const authenticated = useSelector((state) => state.user.authenticated)

  useEffect(() => {
    if (products.length <= 1 && !authenticated) {
      dispatch(getProducts())
    }

    // eslint-disable-next-line
  }, [])

  return (
    <WithScrollbar>
      <Helmet>
        <title>LeBonnet(clone) - Products</title>
      </Helmet>

      <Sections sections={sectionList} products={products} loading={loading} />
    </WithScrollbar>
  )
}

export default Index
