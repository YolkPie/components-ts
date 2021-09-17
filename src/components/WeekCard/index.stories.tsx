import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import CardMonth from './index.tsx'
import './index.scss'

interface ISelectResult {
  year: number,
  week: number,
  start: number,
  end: number
}

storiesOf('日期组件|WeekCard', module)
  .addDecorator(withKnobs)
  .add('周', () => {
    function selectMonth(result: ISelectResult) {
      const {
        year,
        week,
        start,
        end
      } = result
      console.log(`选中年份：${year}`)
      console.log(`选中周数：${week}`)
      console.log(`选中时间段：${start}-${end}`)
    }
    return (
      <CardMonth
        customClass='custom'
        year={2021}
        currentYear={2021}
        currentWeek={5}
        onSelect={selectMonth}
      />
    )
  })
