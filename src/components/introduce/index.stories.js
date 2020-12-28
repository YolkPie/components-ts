import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Introduce from ".";

storiesOf("单品页组件|Introduce", module)
  .addDecorator(withKnobs)
  .add("商品图文介绍", () => {
    const auctionBaseInfo = {
      skuId: "72130434132"
    };
    const attributeInfo = [
      {
        attributeId: 2950,
        attributeName: "机芯类型",
        attributeValueId: 105636,
        attributeValueName: "自动机械表"
      },
      {
        attributeId: 5522,
        attributeName: "成色",
        attributeValueId: 90234,
        attributeValueName: "95新"
      },
      {
        attributeId: 41,
        attributeName: "保修",
        attributeValueId: 80046,
        attributeValueName: "店铺保修"
      },
      {
        attributeId: 3237,
        attributeName: "材质",
        attributeValueId: 9919,
        attributeValueName: "钢"
      },
      {
        attributeId: 7743,
        attributeName: "鉴定机构",
        attributeValueId: 105503,
        attributeValueName: "商家自检"
      },
      {
        attributeId: 2870,
        attributeName: "性别",
        attributeValueId: 67908,
        attributeValueName: "男"
      }
    ];
    const productDescription =
      "<div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/86897/36/12652/190407/5e4e7b8aEa9b36bbf/f15139d86440e889.jpg'><div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/88630/6/12818/293441/5e4e7b8aE2cc4af35/099dfbb85f9473dd.jpg'><div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/104846/39/12754/188627/5e4e7b8aEb9a62e9c/b5d095d5fb79abcb.jpg'><div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/107866/12/6667/224352/5e4e7b8aE8d91e4ee/496776eaa1d07ea2.jpg'><div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/107724/21/6442/332954/5e4e7b8bE601e5db1/3b66ec520808c420.jpg'><div class='for_separator'></div><img src='//img10.360buyimg.com/imgzone/jfs/t1/107481/4/6653/173030/5e4e7b8aEd4842b4a/cb04059d586e2a48.jpg'>";
    return (
      <Introduce
        auctionBaseInfo={auctionBaseInfo}
        productDescription={productDescription}
        attributeInfo={attributeInfo}
      />
    );
  });
