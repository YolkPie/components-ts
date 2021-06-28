import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageViewWrap from "./index.tsx";
import viewData from './mock.ts'

storiesOf("图片放大镜", module)
  .addDecorator(withKnobs)
  .add("图片放大镜", () => {
    const selectIndex = 0
    const SetSelectIndex = (index: number) => {
      console.log(index)
    }
    return <ImageViewWrap imgListData={viewData} selectIndex={selectIndex} changeSelectIndex={SetSelectIndex} />;
  });
