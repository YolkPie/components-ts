import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Attribute from ".";

storiesOf("单品页组件|Attribute", module)
  .addDecorator(withKnobs)
  .add("商品扩展信息", () => {
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
    return (
      <Attribute
        auctionBaseInfo={auctionBaseInfo}
        attributeInfo={attributeInfo}
      />
    );
  });
