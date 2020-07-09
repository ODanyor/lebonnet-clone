import React from "react"
import { NavbarComposition } from "./styles"

// Components
import { Swiper, Navbar } from "shared/components"

const swiperList = [
  { content: "Free shipping netherlands!" },
  { content: "All products 100% bio degradable" },
  { content: "Made in scotland" },
  { content: "All natural fibres in 25 colours" },
]

const index = () => {
  return (
    <NavbarComposition>
      <Swiper list={swiperList} />
      <Navbar />
    </NavbarComposition>
  )
}

export default index
