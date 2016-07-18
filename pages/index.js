import React from 'react'
import { Container } from 'react-responsive-grid'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import MainBanner from '../components/MainBanner'

import { rhythm } from 'utils/typography'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <MainBanner />

          <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
              paddingTop: 0,
            }}
          >
            <h2 style={{ textAlign: 'center' }}>Вы научитесь любить и чувствовать язык!</h2>
            <p>
              Наша школа предлагает вам возможность овладеть всеми необходимыми
              навыками для комфортного общения на иностранном языке в условиях
              современного мира.
            </p>
            <p>
              В школе BRiLLᴉANT вы освоите красивый, полезный
              и разноплановый английский язык на высоком качественном уровне,
              укрепите уверенность в себе и своих способностях, преодолеете
              языковой барьер и узнаете немало интересного о
              межкультурной коммуникации.
            </p>

          </Container>
        </div>
      </DocumentTitle>
    )
  }
}
