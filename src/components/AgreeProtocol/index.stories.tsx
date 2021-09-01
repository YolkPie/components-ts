import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import AgreeProtocol from "./index.tsx";

storiesOf("UI组件|AgreeProtocol", module)
  .addDecorator(withKnobs)
  .add(
    "勾选协议",
    () => {
      return <AgreeProtocol />;
    }
  );
