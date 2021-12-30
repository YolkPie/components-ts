import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import XiDing from "./index.tsx";


storiesOf("列表页组件|XiDing", module)
  .addDecorator(withKnobs)
  .add("XiDing", () => {
    return <div>
            <XiDing />
          </div>
    ;
  });
