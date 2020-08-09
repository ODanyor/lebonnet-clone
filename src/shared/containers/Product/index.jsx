import React from 'react'
import { Product } from './styles'
import { Illustration, Details } from 'shared/components'

const index = (props) => {
  const { product, ...rest } = props
  const { photo_1, photo_2, photo_3, ...details } = product
  const pictures = [photo_1, photo_2, photo_3]

  return (
    <Product>
      <div>
        <Illustrations pictures={pictures} />
      </div>
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
