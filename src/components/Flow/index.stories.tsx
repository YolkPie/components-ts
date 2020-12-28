import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Flow from "./index.tsx";
import './index.scss'
storiesOf("单品页组件|Flow", module)
  .addDecorator(withKnobs)
  .add("商品底部按钮", () => {
    const auctionBaseInfo = {
      startPrice: "100000",
      displayStatus: 10
    };
    return <Flow auctionBaseInfo={auctionBaseInfo} />;
  });
