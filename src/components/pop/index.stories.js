import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Pop from ".";

storiesOf("单品页组件|Pop", module)
  .addDecorator(withKnobs)
  .add("商品弹框", () => {
    const closePop = () => {};
    const newComerInfo = {
      data: {
        newComerFlag: false,
        hasOrder: false
      }
    };
    return <Pop closePop={closePop} newComerInfo={newComerInfo} />;
  });
