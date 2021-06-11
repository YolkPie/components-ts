import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import NavigationTab from './index.tsx'
import './index.scss'

const tabs = [{
  name: '拍品',
  value: 'info'
}, {
  name: '评价',
  value: 'evaluation'
}, {
  name: '详情',
  value: 'detail'
}, {
  name: '帮助',
  value: 'help'
}];

storiesOf('单品页组件|NavigationTab', module)
  .addDecorator(withKnobs)
  .add('导航tab', () => {
    return (
      <NavigationTab
        customClass='custom'
        tabs={tabs}
        onTabChange={(value: string | number) => {
          console.log(value)
        }}
      />
    )
  })
