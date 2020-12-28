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
        path:
          "https://img11.360buyimg.com/xstore/s800x800_jfs/t15667/279/2272121935/93739/5214af01/5aa12cafN42f43323.jpg!q70.webp"
      },
      {
        index: 2,
        path:
          "https://img11.360buyimg.com/xstore/s800x800_jfs/t18331/81/725192684/102855/89e6193a/5aa12cafN00088041.jpg!q70.webp"
      },
      {
        index: 3,
        path:
          "https://img11.360buyimg.com/xstore/s800x800_jfs/t18835/317/722243597/104401/54e0be77/5aa12cb0Nc0569230.jpg!q70.webp"
      }
    ];
    return <GoodsSw data={data} />;
  });
