import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import ViewIndex from "./index.tsx";


storiesOf("列表页组件|ViewIndex", module)
  .addDecorator(withKnobs)
  .add("ViewIndex", () => {
    return <div>
            <ViewIndex />
          </div>
    ;
  });
