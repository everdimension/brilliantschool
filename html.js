import 'babel-polyfill'
import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'
import getMainMeta from './meta/getMainMeta'
import getSocialMeta from './meta/getSocialMeta'

const WEBSITE_ROOT = 'http://brilliantschool.ru'
const BUILD_TIME = new Date().getTime()
// const __svg__ = { path: '../svg/**/*.svg', name: './assets/sprite.svg' }
// require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },

  render () {
    const title = DocumentTitle.rewind()

    let css
    let mainMeta
    let socialMetas
    if (process.env.NODE_ENV === 'production') {
      const { pathname } = this.props.location
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
      mainMeta = getMainMeta(pathname)
      socialMetas = getSocialMeta(pathname, this.props, {
        WEBSITE_ROOT,
        fallbackTitle: title,
      })
    }
    let faviconLink = (
      <link rel="shortcut icon" href={require('!url!./assets/favicon/favicon.ico')} />
    )
    if (process.env.NODE_ENV === 'production') {
      faviconLink = [
        <link rel="shortcut icon" href="/favicon/favicon.ico" />,
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />,
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />,
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />,
      ]
    }

    let svg
    if (process.env.NODE_ENV === 'production') {
      svg = require('!raw!./public/assets/sprite.svg')
    } else {
      svg = require('!raw!./temp/sprite.svg')
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
          {mainMeta}
          {socialMetas}
          <title>{title}</title>

          {faviconLink}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,cyrillic" rel="stylesheet" type="text/css" />
          <TypographyStyle />
          {css}
        </head>
        <body>
          {/* svg sprite */}
          <div
            dangerouslySetInnerHTML={{ __html: svg }}
            style={{
              position: 'absolute',
              width: 0, height: 0,
              overflow: 'hidden',
            }}
          />

          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />

          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-81199706-1', 'auto');
                ga('send', 'pageview');
                `,
              }}
            />
          )}
        </body>
      </html>
    )
  },
})
