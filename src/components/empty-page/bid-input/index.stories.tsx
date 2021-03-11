import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import BidInput from "./index.tsx";

storiesOf("UI组件|BidInput", module)
  .addDecorator(withKnobs)
  .add(
    "出价框",
    () => {
      return <BidInput />;
    }
  );
