import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import PriceTips from "./index.tsx";

storiesOf("海外房产|PC", module)
  .addDecorator(withKnobs)
  .add("说明组件", () => {
    return <PriceTips tipMessage={'此价格仅作参考，实际价格以售楼处公示为准'} />
  });
