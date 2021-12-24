import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import UserHead from "./index.tsx";

storiesOf("UI组件|UserHead", module)
  .addDecorator(withKnobs)
  .add(
    "用户头像",
    () => {
      const data = {}
      return <UserHead data={data}/>;
    }
  );
