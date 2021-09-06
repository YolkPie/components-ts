import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import CheckBox from "./index.tsx";

storiesOf("UI组件|CheckBox", module)
  .addDecorator(withKnobs)
  .add(
    "复选框",
    () => {
      return <CheckBox />;
    }
  );
