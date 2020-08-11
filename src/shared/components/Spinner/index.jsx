import React from 'react'
import { Spinner } from './styles'
import logo from 'shared/assets/logo.svg'

const index = () => {
  return (
    <Spinner>
      <img alt='loading ...' src={logo} width='150px' height='auto' />
    </Spinner>
  )
}

export default index
