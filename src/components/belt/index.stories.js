import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Belt from ".";

storiesOf("单品页组件|Belt", module)
  .addDecorator(withKnobs)
  .add("商品腰带", () => {
    const auctionBaseInfo = {
      startPrice: "100000.99",
      assessmentPrice: 0,
      displayStatus: 10
    };
    return <Belt auctionBaseInfo={auctionBaseInfo} />;
  });
