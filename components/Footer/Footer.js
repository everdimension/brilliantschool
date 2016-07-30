import React from 'react'
import { rhythm } from 'utils/typography'
import { Link } from 'react-router'
import SvgIcon from '../SvgIcon'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className="Footer">
        <div
          className="Container"
          style={{
            padding: `0 ${rhythm(1/2)}`,
          }}
        >
          <div className="Footer__content">
            <div>
              <div className="Footer__logo" aria-label="Brilliant school">
                <SvgIcon
                  className="brilliant-logo"
                  name="logo_white"
                />
              </div>


              <p>
                <a
                  href="https://www.google.com/maps/place/Bolshaya+Nikitskaya+ul.,+43,+Moskva,+Russia,+121069/@55.757199,37.5889142,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54a4a232b18c1:0x8d849d293c120aaa!8m2!3d55.757199!4d37.5911029"
                  target="_blank"
                >
                  Большая Никитская, 43, Москва
                </a>
              </p>
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
        </div>
      </div>
    )
  }
}

export default Footer
