import React from "react"
import { Illustrations, Illustration } from "./styles"

const index = ({ images }) => {
  return (
    <Illustrations>
      {images.map(
        (image, index) =>
          image !== "url" && (
            <Illustration key={index}>
              <img
                alt={`Img: ${index}`}
                src={image}
                width="100%"
                height="auto"
              />
            </Illustration>
          )
      )}
    </Illustrations>
  )
}

export default index
