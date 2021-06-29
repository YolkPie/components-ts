import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Progress from "./index.tsx";

storiesOf("UI组件|Progress", module)
  .addDecorator(withKnobs)
  .add(
    "进度条",
    () => {
      return <Progress />;
    }
  );
