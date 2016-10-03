import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

const pricing = [
  {
    name: 'Advanced',
    price: 8000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Intermediate',
    price: 16000,
    description: 'Lorem ipsum dolor sit amet.',
  },
]

export default class ReactComponent extends React.Component {
  render () {
    return (
      <DocumentTitle title={`Стоимость занятий школы brilliant school | ${config.siteTitle}`}>
        <div>
          <p>Some prices table</p>

          <table className="collapsibleTable">
            <tbody>
              {pricing.map(p => (
                <tr>
                  <th>{p.name}</th>
                  <td>{p.price} руб.</td>
                  <td>{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocumentTitle>
    )
  }
}
