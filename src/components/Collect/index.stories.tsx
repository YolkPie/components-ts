import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Collect from "./index.tsx";

storiesOf("UI组件|Collect", module)
  .addDecorator(withKnobs)
  .add(
    "收藏",
    () => {
      const data = {}
      return <Collect data={data}/>;
    }
  );
