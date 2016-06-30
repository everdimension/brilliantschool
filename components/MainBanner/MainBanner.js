import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'
import './MainBanner.css'

class MainBanner extends React.Component {
  render() {
    return (
      <div className="MainBanner">
        <Container
          style={{
            maxWidth: 960,
          }}
        >
          Advanced language school
        </Container>

      </div>
    );
  }
}

export default MainBanner;
