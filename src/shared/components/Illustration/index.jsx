import React from 'react'
import { Illustration } from './styles'

const index = ({ picture }) => {
  return (
    <Illustration key={index}>
      <img alt={`Img: ${index}`} src={picture} width='100%' height='auto' />
    </Illustration>
  )
}

export default index
