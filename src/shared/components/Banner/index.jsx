import React from 'react'
import { Banner, BannerTitle } from './styles'
import { Title } from 'shared/components'

function index({ banner }) {
  return (
    <Banner>
      <img
        alt={`banner-${banner.title}`}
        src={banner.img}
        width='100%'
        height='auto'
      />
      <BannerTitle>
        <Title colored={true} centered={true}>
          {banner.title}
        </Title>
      </BannerTitle>
    </Banner>
  )
}

export default index
