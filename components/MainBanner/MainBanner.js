import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography';
import BackgroundImageLoader from '../BackgroundImageLoader'
import './MainBanner.css'

const imgPlaceholder = require('../../assets/city_bg_blur.jpg')
const img = require('../../assets/city_bg_lg.jpg')

class MainBanner extends React.Component {
  render () {
    return (
      <BackgroundImageLoader
        placeholder={imgPlaceholder}
        url={img}
        className="MainBanner"
      >
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <h1 className="BannerHeading">
            <span className="BannerBrand">brilliant</span>

            <br />
            <span className="BannerSubbrand">школа иностранных языков</span>
          </h1>
        </Container>

      </BackgroundImageLoader>
    )
  }
}

export default MainBanner;
