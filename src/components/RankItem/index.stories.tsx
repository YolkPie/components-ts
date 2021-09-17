import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import RankItem from './index.tsx'
import './index.scss'

storiesOf('UI组件|RankItem', module)
  .addDecorator(withKnobs)
  .add('排行榜', () => {
    return (
      <div>
        <RankItem
          rank={1}
          text="排行榜第一名排行榜第一名"
        />
        <RankItem
          rank={2}
          text="排行榜第二名排行榜第二名排行榜第二名"
        />
        <RankItem
          rank={3}
          text="排行榜第三名排行榜第三名排行榜第三名排行榜第三名"
        />
        <RankItem
          rank={4}
          text="排行榜第四名排行榜第四名排行榜第四名排行榜第四名排行榜第四名"
        />
      </div>
    )
  })
