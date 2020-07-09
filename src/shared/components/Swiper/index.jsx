import React, { useEffect, useRef } from "react"
import { Swiper, SwiperItems, SwiperItem } from "./styles"

const Items = ({ list }) =>
  list.map((item, index) => <SwiperItem key={index}>{item.content}</SwiperItem>)

const Index = ({ list }) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      let width = 0
      const swiperID = setInterval(() => {
        width < list.length - 1 ? (width += 1) : (width = 0)
        swiperRef.current.style.transform = `translateX(-${width * 100}%)`
      }, 3000)

      return () => clearInterval(swiperID)
    }
  }, [swiperRef, list])

  return (
    <Swiper>
      <SwiperItems ref={swiperRef}>
        <Items list={list} />
      </SwiperItems>
    </Swiper>
  )
}
Index.displayName = "Swiper"

export default Index
