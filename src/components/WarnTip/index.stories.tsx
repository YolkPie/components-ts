import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import WarnTip from './index.tsx'

const text = '提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案'
storiesOf('UI组件|WarnTip', module)
  .addDecorator(withKnobs)
  .add('年', () => {
    return (
      <WarnTip
        showIcon={true}
        text={text}
      >
        <button>button</button>
      </WarnTip>
    )
  })
