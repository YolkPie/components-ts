import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import DetailTitle from './index.tsx'
import './index.scss'

storiesOf('单品页组件|DetailTitle', module)
  .addDecorator(withKnobs)
  .add('标题', () => {

    return (
      <DetailTitle
        customClass='custom'
        title="标的物详情"
      />
    )
  })
