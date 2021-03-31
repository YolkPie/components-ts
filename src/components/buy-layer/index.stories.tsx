import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";

import BuyLayer from "./index.tsx";

storiesOf("UI组件|BuyLayer", module)
  .addDecorator(withKnobs)
  .add(
    "加车弹框",
    () => {
      const data = array("测试商品", [
        {
          goodsName:
            "【中原收藏】收淘青铜白鸟朝凤熏香炉规格32*13cm重1990克",
          imgUrl: "//media.istockphoto.com/photos/stack-of-books-on-a-shelf-multicolored-book-spines-picture-id507071472?s=612x612",
          limit: "活动期间总限购1个",
          unit: "/个",
          marketPrice: "1999.00",
          jdPrice: "1666.00",
          startBuyUnitNum: 1
        }
      ]);
      return <BuyLayer data={data} />;
    }
  );
