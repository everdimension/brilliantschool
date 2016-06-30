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
      <div id="navbar" className="Navbar">
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
          }}
        >
          <Link
            to={prefixLink('/')}
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Link>
        </Container>
      </div>
  </Headroom>
  );
}

export default Navbar;
