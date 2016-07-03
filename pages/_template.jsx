import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import 'normalize.css'
import '../css/layout.css';

import { rhythm } from 'utils/typography'

import Navbar from '../components/Navbar';

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
    this.indexRoute = prefixLink('/');
  }

  componentDidMount() {
    const currentPath = window.location.pathname;
    this.setState({
      currentPath,
      isIndexPage: currentPath === this.indexRoute,
    });
  }

  componentWillUpdate() {
    console.log('will update');
    const currentPath = window.location.pathname;
    if (this.state.currentPath !== currentPath) {
      this.setState({
        currentPath,
        isIndexPage: currentPath === this.indexRoute,
      });
    }
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
