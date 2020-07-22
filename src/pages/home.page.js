import React from "react"

import { Helmet } from "react-helmet"
import { Slider, BannerHand, BannerBaby } from "shared/components"
import { Banners } from "shared/compositions"

import slide_img_1 from "shared/assets/images/slide_img_1.jpg"
import slide_img_2 from "shared/assets/images/slide_img_2.jpg"

const slides = [
  { img: slide_img_1, title: "Winter is coming" },
  { img: slide_img_2, title: "100% biodegradable" },
]

function index() {
  return (
    <div>
      <Helmet>
        <title>LeBonnet(clone)</title>
      </Helmet>

      <section>
        <Slider slides={slides} />
      </section>
      <section>
        <Banners left={<BannerHand />} right={<BannerBaby />} />
      </section>
    </div>
  )
}

export default index
