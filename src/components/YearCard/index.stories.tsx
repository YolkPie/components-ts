import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import CardYear from './index.tsx'
import './index.scss'

storiesOf('日期组件|YearCard', module)
  .addDecorator(withKnobs)
  .add('年', () => {
    function selectYear(year: number) {
      console.log(`选中年份：${year}`)
    }
    return (
      <CardYear
        customClass='custom'
        year={2021}
        currentYear={2021}
        onSelect={selectYear}
      />
    )
  })
