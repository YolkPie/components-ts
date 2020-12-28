import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import GoodsInfo from ".";

storiesOf("单品页组件|GoodsInfo", module)
  .addDecorator(withKnobs)
  .add("商品基础信息", () => {
    const auctionBaseInfo = {
      title: "9.5新浪琴名匠系列双历精钢自动机械男表L2.755.4.78.6"
    };
    return <GoodsInfo auctionBaseInfo={auctionBaseInfo} />;
  });
