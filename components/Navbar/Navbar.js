import React from 'react'
import { rhythm } from 'utils/typography'
import Headroom from 'react-headroom'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Logo from '../Logo'
import './Navbar.css'

function Navbar () {
  return (
    <Headroom>
      <header id="navbar" className="Navbar">
        <div
          className="Container"
          style={{
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <nav className="NavContent" role="navigation">
            <div className="NavContent__left">
              <Link
                to={prefixLink('/')}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                aria-label="Brilliant school"
              >
                <Logo />
              </Link>
            </div>
            {' '}
            <div className="NavContent__right">
              <ul className="nav">
                <li>
                  <Link to="/about/">О школе</Link>
                </li>
                <li>
                  <Link to="/contacts/">Контакты</Link>
                </li>
              </ul>
            </div>
          </nav>

        </div>
      </header>
    </Headroom>
  )
}

export default Navbar;
