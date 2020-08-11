import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Slider,
  BannerHand,
  BannerBaby,
  Category,
  Banner,
} from 'shared/components'
import { Banners } from 'shared/compositions'
import { useHandleWindowWidth, useWindowScrollToTop } from 'shared/hooks'

import {
  slide_img_1,
  slide_img_2,
  home_1,
  home_2,
  home_3,
  home_4,
} from 'shared/assets/images'

import { beanie, scarve, gloves, exclusive } from 'shared/assets/images/loaders'

const slides = [
  { img: slide_img_1, title: 'Winter is coming' },
  { img: slide_img_2, title: '100% biodegradable' },
]

const categories = [
  { img: beanie, title: 'beanies' },
  { img: scarve, title: 'scarves' },
  { img: gloves, title: 'gloves' },
  { img: exclusive, title: 'exclusives' },
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
    <React.Fragment>
      <MobileCategories />
      <MobileBanners />
    </React.Fragment>
  )
}

function MobileCategories() {
  return (
    <section
      style={{
        width: '100vw',
        display: 'flex',
        overflowX: 'auto',
      }}
    >
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </section>
  )
}

function MobileBanners() {
  return (
    <section style={{ paddingBottom: '48px' }}>
      {banners.map((banner, index) => (
        <Banner key={index} banner={banner} />
      ))}
    </section>
  )
}

function Index() {
  useWindowScrollToTop()

  return (
    <div>
      <Helmet>
        <title>LeBonnet(clone)</title>
      </Helmet>

      {useHandleWindowWidth() >= 900 ? <ForPC /> : <ForMobile />}
    </div>
  )
}

export default Index
