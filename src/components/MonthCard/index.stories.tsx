import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import CardMonth from './index.tsx'
import './index.scss'

interface ISelectResult {
  year: number,
  month: number
}

storiesOf('日期组件|MonthCard', module)
  .addDecorator(withKnobs)
  .add('月', () => {
    function selectMonth(result: ISelectResult) {
      const {
        year,
        month
      } = result
      console.log(`选中年份：${year}`)
      console.log(`选中月份：${month}`)
    }
    return (
      <CardMonth
        customClass='custom'
        year={2021}
        currentYear={2021}
        currentMonth={5}
        onSelect={selectMonth}
      />
    )
  })
