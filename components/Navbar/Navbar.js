import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'
import Headroom from 'react-headroom'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Logo from '../Logo';
import './Navbar.css';

function Navbar() {
  return (
    <Headroom>
      <header id="navbar" className="Navbar">
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <div className="NavContent">
            <div className="NavContent__left">
              <Link
                to={prefixLink('/')}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                <Logo />
              </Link>
            </div>
            {' '}
            <div className="NavContent__right">
              <nav>
                <ul className="nav">
                  <li>
                    <Link to="/about/">О школе</Link>
                  </li>
                  <li>
                    <Link to="/contacts/">Контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </Container>
      </header>
  </Headroom>
  );
}

export default Navbar;
