import React from 'react'
import { rhythm } from 'utils/typography'
import BackgroundImageLoader from '../BackgroundImageLoader'
import SvgIcon from '../SvgIcon'
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
        <div
          className="Container"
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <h1 className="BannerHeading">
            <SvgIcon className="BannerBrand BannerBrand--svg" name="logo_white" />

            <br />
            <span className="BannerSubbrand">школа иностранных языков</span>
          </h1>
        </div>

      </BackgroundImageLoader>
    )
  }
}

export default MainBanner;
