import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import CircleProcessState from "./index.tsx";

storiesOf("UI组件|CircleProcessState", module)
  .addDecorator(withKnobs)
  .add(
    "圆环进度条",
    () => {
      return <CircleProcessState />;
    }
  );
