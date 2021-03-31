import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import GoodsSw from ".";

storiesOf("单品页组件|GoodsSw", module)
  .addDecorator(withKnobs)
  .add("商品轮播图", () => {
    const data = [
      {
        index: 1,
        path: "//cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_1280.jpg"
      },
      {
        index: 2,
        path: "//cdn.pixabay.com/photo/2014/08/16/18/17/book-419589_1280.jpg"
      }
    ];
    return <GoodsSw data={data} />;
  });
