import React, { useRef, useEffect } from "react"
import { Slider, SlidesContainer, Slide, SlideTitle } from "./styles"

// Components
import { Title } from "shared/components"

const Slides = ({ slides }) =>
  slides.map((slide, index) => (
    <Slide key={index}>
      <SlideTitle>
        <Title centered={true} colored={false}>
          {slide.title}
        </Title>
      </SlideTitle>
      <img alt="slide" src={slide.img} width="100%" />
    </Slide>
  ))

const Index = ({ slides }) => {
  const slidesRef = useRef(null)

  useEffect(() => {
    if (slidesRef.current) {
      let width = 0
      const swiperID = setInterval(() => {
        width < slides.length - 1 ? (width += 1) : (width = 0)
        slidesRef.current.style.transform = `translateX(-${width * 100}%)`
      }, 5000)

      return () => clearInterval(swiperID)
    }
  }, [slidesRef, slides])

  return (
    <Slider>
      <SlidesContainer ref={slidesRef}>
        <Slides slides={slides} />
      </SlidesContainer>
    </Slider>
  )
}
Index.displayName = "Slider"

export default Index
