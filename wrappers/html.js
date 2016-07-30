import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    const { title } = post
    const { siteTitle } = config
    const pageTitle = siteTitle ? `${title} | ${siteTitle}` : title
    return (
      <DocumentTitle title={pageTitle}>
        <div className="markdown">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  },
})
