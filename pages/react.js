import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import TestComp from '../components/TestComp';

export default class ReactComponent extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | React.js components`}>
        <div>
          <h1>React.js components</h1>
          <h3>Counter example</h3>
          <TestComp />
          <p>{this.state.count}</p>
          <button onClick={() => this.handlePlusClick()}>+</button>
          <button onClick={() => this.handleMinusClick()}>-</button>
          <hr />
          <TestComp />
        </div>
      </DocumentTitle>
    )
  }
}
