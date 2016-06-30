import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import 'normalize.css'

import { rhythm } from 'utils/typography'

import Navbar from '../components/Navbar';

// const __svg__ = { path: '../svg/**/*.svg', name: './svg/[hash].sprite.svg' };

class Template extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      location: PropTypes.object,
    };
  }

  constructor() {
    super();
    this.state = {
      isIndexPage: false,
    };
  }

  componentDidMount() {
    // console.log('__svg__', __svg__);
    // require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
    this.setState({
      isIndexPage: window.location.pathname === prefixLink('/'),
    });
  }

  render() {
    let body;
    if (this.state.isIndexPage) {
      body = this.props.children;
    } else {
      body = (
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      );
    }

    return (
      <div>
        <Navbar />
        {body}
      </div>
    );
  }
}

export default Template;
