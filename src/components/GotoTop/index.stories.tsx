import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import GotoTop from "./index.tsx";

storiesOf("UI组件|GotoTop", module)
  .addDecorator(withKnobs)
  .add(
    "返回顶部",
    () => {
      const data = {}
      return <GotoTop data={data}/>;
    }
  );
