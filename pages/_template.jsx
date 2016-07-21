import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import 'normalize.css'
import '../css/layout.css'

import { rhythm } from 'utils/typography'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Template extends React.Component {
  static get propTypes () {
    return {
      children: PropTypes.any,
      location: PropTypes.object,
    }
  }

  constructor () {
    super()
    this.state = {
      isIndexPage: false,
    }
    this.indexRoute = prefixLink('/')
  }

  componentWillMount () {
    const currentPath = this.props.location.pathname
    this.setState({
      currentPath,
      isIndexPage: currentPath === this.indexRoute,
    })
  }

  componentWillUpdate (nextProps) {
    const newPath = nextProps.location.pathname
    const { currentPath } = this.state
    if (newPath !== currentPath) {
      this.setState({
        currentPath: newPath,
        isIndexPage: newPath === this.indexRoute,
      })
    }
  }

  render () {
    let body
    if (this.state.isIndexPage) {
      body = this.props.children
    } else {
      body = (
        <div
          className="Container"
          style={{
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
          }}
        >
          <main role="main" className="PageBody">
            {this.props.children}
          </main>
        </div>
      )
    }

    return (
      <div>
        <Navbar />
        {body}
        <Footer />
      </div>
    )
  }
}

export default Template
