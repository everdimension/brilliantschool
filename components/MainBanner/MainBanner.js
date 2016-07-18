import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography';
import './MainBanner.css'

class MainBanner extends React.Component {
  render() {
    return (
      <div className="MainBanner">
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <h1 className="BannerHeading">
            <span className="BannerBrand">Brilliant</span>

            <br />
            <span className="BannerSubbrand">школа иностранных языков</span>
          </h1>
        </Container>

      </div>
    );
  }
}

export default MainBanner;
