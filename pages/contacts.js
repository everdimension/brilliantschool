import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import GoogleMap from '../components/GoogleMap'

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
          <h4 className="ContactsPhone">
            <a
              href="tel:+79055144510"
            >+7 (905) 514-45-10</a>
          </h4>
          <p>
            Большая Никитская, 43
            <br />
            121069, Москва
          </p>

          <GoogleMap />
        </div>
      </DocumentTitle>
    )
  }
}
