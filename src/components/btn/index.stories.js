import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Btn from ".";

storiesOf("单品页组件|Btn", module)
  .addDecorator(withKnobs)
  .add("商品底部按钮", () => {
    const auctionBaseInfo = {
      startPrice: "100000",
      displayStatus: 10
    };
    return <Btn auctionBaseInfo={auctionBaseInfo} />;
  });
