import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import GoogleMap from '../components/GoogleMap'

export default class ReactComponent extends React.Component {
  render () {
    return (
      <DocumentTitle title={`Контакты школы brilliant school | ${config.siteTitle}`}>
        <div>
          <h4>
            <a
              className="ContactsPhone ContactsPhone--primary"
              href="tel:+79151596655"
            >+7 (915) 159-66-55</a>
          </h4>
          <p>
            <a href="mailto:info@brilliantschool.ru">info@brilliantschool.ru</a>
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
