import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageViewWrap from "./index.tsx";
import viewData from './mock.ts'

storiesOf("图片查看组件|Flow", module)
  .addDecorator(withKnobs)
  .add("商品底部按钮", () => {
    const selectIndex = 0
    const SetSelectIndex = (index: number) => {
      console.log(index)
    }
    return <ImageViewWrap imgListData={viewData} selectIndex={selectIndex} changeSelectIndex={SetSelectIndex} />;
  });
