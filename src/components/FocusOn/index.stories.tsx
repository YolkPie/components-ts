import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import FocusOn from "./index.tsx";

storiesOf("UI组件|FocusOn", module)
  .addDecorator(withKnobs)
  .add(
    "关注",
    () => {
      return <FocusOn />;
    }
  );
