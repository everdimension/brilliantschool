import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config';
import TestComp from '../components/TestComp';
import GoogleMap from '../components/GoogleMap';

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  // AIzaSyAOsxnjLHuwUVL6HVjik_moNSqAtULtc6E

  handlePlusClick () {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusClick () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <DocumentTitle title={`Контакты | ${config.siteTitle}`}>
        <div>
          <h1>Контакты</h1>
          <h3>Counter example</h3>
          <p>{this.state.count}</p>
          <button onClick={() => this.handlePlusClick()}>+</button>
          <button onClick={() => this.handleMinusClick()}>-</button>
          <hr />
          <TestComp />
          <GoogleMap />
        </div>
      </DocumentTitle>
    )
  }
}
