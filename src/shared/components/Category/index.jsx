import React from 'react'
import { Category, CategoryImg, CategoryTitle } from './styles'

export default function index({ category }) {
  return (
    <Category>
      <CategoryImg>
        <img
          alt={`category-${category.title}`}
          src={category.img}
          width='56px'
          height='56px'
        />
      </CategoryImg>
      <CategoryTitle>{category.title}</CategoryTitle>
    </Category>
  )
}
