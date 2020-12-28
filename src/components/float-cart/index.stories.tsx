import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import FloatCart from './index.tsx'

storiesOf('UI组件|FloatCart', module)
  .addDecorator(withKnobs)
  .add(
    '购物车图标',
    () => {
      const num = number('数量', 8)
      return (
        <FloatCart
          num={num}
        />
      )
    }
  )
