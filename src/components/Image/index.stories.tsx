import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Image from './index.tsx'
import './index.scss'

import TestImg from './assets/test.jpg' 

storiesOf('UI组件|Image', module)
  .addDecorator(withKnobs)
  .add('图片', () => {

    return (
      <Image
        customClass='custom'
        hideIfError={true}
        src={TestImg}
        alt='测试图片'
      />
    )
  })
