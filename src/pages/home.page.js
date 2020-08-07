import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { Slider, BannerHand, BannerBaby, Banner } from 'shared/components'
import { Banners } from 'shared/compositions'

import slide_img_1 from 'shared/assets/images/slide_img_1.jpg'
import slide_img_2 from 'shared/assets/images/slide_img_2.jpg'

import home_1 from 'shared/assets/images/home_1.jpg'
import home_2 from 'shared/assets/images/home_2.jpg'
import home_3 from 'shared/assets/images/home_3.jpg'
import home_4 from 'shared/assets/images/home_4.jpg'

const slides = [
  { img: slide_img_1, title: 'Winter is coming' },
  { img: slide_img_2, title: '100% biodegradable' },
]

const banners = [
  { img: home_1, title: 'Beanie' },
  { img: home_2, title: 'Scarve' },
  { img: home_3, title: 'Gloves' },
  { img: home_4, title: 'Exclusive' },
]

function ForPC() {
  return (
    <React.Fragment>
      <section>
        <Slider slides={slides} />
      </section>
      <section>
        <Banners left={<BannerHand />} right={<BannerBaby />} />
      </section>
    </React.Fragment>
  )
}

function ForMobile() {
  return (
    <div style={{ paddingBottom: '48px' }}>
      {banners.map((banner, index) => (
        <Banner key={index} banner={banner} />
      ))}
    </div>
  )
}

function Index() {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowWidth() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => window.removeEventListener('resize', handleWindowWidth)
  })

  return (
    <div>
      <Helmet>
        <title>LeBonnet(clone)</title>
      </Helmet>

      {width >= 900 ? <ForPC /> : <ForMobile />}
    </div>
  )
}

export default Index
