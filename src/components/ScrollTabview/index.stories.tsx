import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ScrollTabview from './index.tsx'
import './index.scss'

storiesOf('单品页组件|ScrollTabview', module)
  .addDecorator(withKnobs)
  .add('滚动选中', () => {
    return (
      <ScrollTabview
        customClass='custom'
      >
        <div tabName="拍品" tabValue="info" style={{
          height: '200px',
          backgroundColor: 'lightblue'
        }}>
        </div>
        <div tabName="评价" tabValue="evaluation" style={{
          height: '300px',
          backgroundColor: 'lightgreen'
        }}></div>
        <div tabName="详情" tabValue="detail" style={{
          height: '200px',
          backgroundColor: 'lightgray'
        }}></div>
        <div tabName="帮助" tabValue="help" style={{
          height: '200px',
          backgroundColor: 'lightblue'
        }}></div>
      </ScrollTabview>
    )
  })
