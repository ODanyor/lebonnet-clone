import React from 'react'
import { Product, IllustrationsContainer } from './styles'
import { Illustration, Details } from 'shared/components'

const index = (props) => {
  const { product, ...rest } = props
  const { photo_1, photo_2, photo_3, ...details } = product
  const pictures = [photo_1, photo_2, photo_3]

  return (
    <Product>
      <IllustrationsContainer>
        <Illustrations pictures={pictures} />
      </IllustrationsContainer>
      <Details {...details} {...rest} />
    </Product>
  )
}

function Illustrations({ pictures }) {
  return pictures.map((picture, index) =>
    picture !== 'url' ? <Illustration key={index} picture={picture} /> : null
  )
}

export default index
