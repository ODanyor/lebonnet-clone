import React, { useEffect, useState } from 'react'
import { NavbarComposition, LogoContainer } from './styles'
import logo from 'shared/assets/logo.svg'

// Components
import { Swiper, Navbar } from 'shared/components'

const swiperList = [
  { content: 'Free shipping netherlands!' },
  { content: 'All products 100% bio degradable' },
  { content: 'Made in scotland' },
  { content: 'All natural fibres in 25 colours' },
]

function Logo() {
  return (
    <LogoContainer>
      <img alt='logo' src={logo} width='120px' height='auto' />
    </LogoContainer>
  )
}

const Index = (props) => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowWidth() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => window.removeEventListener('resize', handleWindowWidth)
  })

  return width >= 900 ? (
    <NavbarComposition>
      <Swiper list={swiperList} />
      <Navbar {...props} />
    </NavbarComposition>
  ) : (
    <Logo />
  )
}

export default Index
