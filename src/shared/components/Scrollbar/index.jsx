import React from 'react'
import { Scrollbar } from './styles'

const products = [
  { to: '#beanies', content: 'Beanies' },
  { to: '#scarves', content: 'Scarves' },
  { to: '#gloves', content: 'Gloves' },
  { to: '#exclusives', content: 'Exclusives' },
]

const index = () => {
  return (
    <Scrollbar>
      <BarList />
    </Scrollbar>
  )
}

function BarList() {
  return products.map((product, index) => (
    <li key={index}>
      <a href={product.to}>{product.content}</a>
    </li>
  ))
}

export default index
