import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import MainBanner from '../components/MainBanner'
import IndexFeature from '../components/IndexFeature'

import { rhythm } from 'utils/typography'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <MainBanner />

          <div
            className="Container"
            style={{
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
              paddingTop: 0,
            }}
          >
            <p>
              Наша школа предлагает вам возможность овладеть всеми необходимыми
              навыками для комфортного общения на иностранном языке в условиях
              современного мира.
            </p>
            <p>
              В школе &laquo;brilliant&raquo; вы освоите красивый, полезный
              и разноплановый английский язык на высоком качественном уровне,
              укрепите уверенность в себе и своих способностях, преодолеете
              языковой барьер и узнаете немало интересного о
              межкультурной коммуникации.
            </p>

            <h2 className="IntroHeading">Вы научитесь любить и чувствовать язык!</h2>

            <div className="grid">
              <div className="grid-4">
                <IndexFeature icon="cozy">
                  Комфортная обстановка (чай, кофе, сладости)
                  <br />
                  Удобное месторасположение в центре Москвы
                </IndexFeature>
              </div>
              <div className="grid-4">
                <IndexFeature icon="teacher">
                  Молодые, эрудированные, энергичные и увлеченные преподаватели
                </IndexFeature>
              </div>
              <div className="grid-4">
                <IndexFeature icon="speech">
                  Мы поставим вам красивое и правильное произношение
                </IndexFeature>
              </div>
            </div>

          </div>
        </div>
      </DocumentTitle>
    )
  }
}
