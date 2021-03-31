import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Shop from ".";

storiesOf("单品页组件|Shop", module)
  .addDecorator(withKnobs)
  .add("商品店铺", () => {
    const shopMessage = {
      shopLogo:
        "//cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937__340.jpg",
      shopName: "铭盛堂奢侈品",
      shopFollowCount: "199",
      hisProductCount: 30254,
      nowProductCount: 0,
      shopStartData: "4.50"
    };
    const shopStartIntegerBit = 2;
    const shopStartDecimal = 50;
    const shopStartEmpty = ["", ""];

    return (
      <Shop
        shopMessage={shopMessage}
        shopStartIntegerBit={shopStartIntegerBit}
        shopStartDecimal={shopStartDecimal}
        shopStartEmpty={shopStartEmpty}
      />
    );
  });
