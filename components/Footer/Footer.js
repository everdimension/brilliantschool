import React from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'
import { Link } from 'react-router'
import SvgIcon from '../SvgIcon'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className="Footer">
        <Container
          style={{
            maxWidth: 960,
            padding: `0 ${rhythm(1/2)}`,
          }}
        >
          <div className="Footer__content">
            <div>
              <div className="Footer__logo">
                <SvgIcon
                  className="brilliant-logo"
                  name="logo_white"
                />
              </div>


              <p>Большая Никитская, 43, Москва</p>
            </div>

            <nav className="Footer__nav">
              <ul>
                <li>
                  <Link to="/about/">O школе</Link>
                </li>
                <li>
                  <Link to="/contacts/">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    )
  }
}

export default Footer
