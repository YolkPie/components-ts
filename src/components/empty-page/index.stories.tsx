import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import EmptyPage from './index.tsx';

storiesOf('UI组件|EmptyPage', module)
  .addDecorator(withKnobs)
  .add(
    '页面托底',
    () => {
      return <EmptyPage />;
    }
  );
