import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageMagnifier from "./index.tsx";
import viewData from './mock.ts'

storiesOf("海外房产|PC", module)
  .addDecorator(withKnobs)
  .add("图片放大镜", () => {
    return <ImageMagnifier minImg={viewData[0].skuImg} maxImg={viewData[0].skuImg} />;
  });
