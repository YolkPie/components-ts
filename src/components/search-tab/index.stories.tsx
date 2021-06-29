import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SearchTab from "./index.tsx";


storiesOf('UI组件|SearchTab', module)
  .addDecorator(withKnobs)
  .add(
    '搜索Tab栏',
    () => {
      return <SearchTab />
    }
  )
