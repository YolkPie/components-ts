import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import DetailSection from './index.tsx'
import './index.scss'

storiesOf('单品页组件|DetailSection', module)
  .addDecorator(withKnobs)
  .add('详情区块', () => {

    return (
      <DetailSection
        customClass="custom"
        customTitleClass="customTitle"
        title="标的物详情"
        needFold={true}
        contentHeight={200}
        foldText="展开啊"
      >
        <div style={{
          height: '400px',
          background: 'lightblue'
          }}>标的物详情</div>
        </DetailSection>
    )
  })
