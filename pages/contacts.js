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
      <DocumentTitle title={`Контакты школы brilliant school | ${config.siteTitle}`}>
        <div>
          <h4>
            <a
              className="ContactsPhone ContactsPhone--primary"
              href="tel:+79151559405"
            >+7 (915) 155-94-05</a>
          </h4>
          <p>
            <a
              className="ContactsPhone"
              href="tel:+79055144510"
            >+7 (905) 514-45-10</a>
          </p>
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
