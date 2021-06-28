import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageMagnifier from "./index.tsx";
import viewData from './mock.ts'

storiesOf("图片查看组件", module)
  .addDecorator(withKnobs)
  .add("图片查看组件", () => {
    return <ImageMagnifier minImg={viewData[0].skuImg} maxImg={viewData[0].skuImg} />;
  });
