import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ShopCard from './index.tsx'
import './index.scss'

import TestImg from './assets/test.jpg' 

storiesOf('关注页组件|ShopCard', module)
  .addDecorator(withKnobs)
  .add('店铺卡片', () => {
    const renderSubtitle = () => {
      return <p>subtitle 内容</p>
    }

    return (
      <ShopCard
        logo={TestImg}
        title="测试店铺测试店铺测试店铺测试店铺测试店铺测试店铺测试店铺"
        subtitle="dddd"
        renderSubtitle={renderSubtitle()}
        onClick={() => alert('onClick')}
      >
        插槽内容
      </ShopCard>
    )
  })
