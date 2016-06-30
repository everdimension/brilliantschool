import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'

const BUILD_TIME = new Date().getTime()
const __svg__ = { path: '../svg/**/*.svg', name: './svg/sprite.svg' };

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },

  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="ru">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500&subset=cyrillic" rel="stylesheet" />
          <TypographyStyle />
          {css}
        </head>
        <body>
          {/* svg sprite */}
          <div dangerouslySetInnerHTML={{ __html: require(`!raw!./svg/sprite.svg`) }} />

          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
