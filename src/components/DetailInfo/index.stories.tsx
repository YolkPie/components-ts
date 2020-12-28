import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import DetailInfo from "./index.tsx";
import './index.scss'

storiesOf("单品页组件|DetailInfo", module)
  .addDecorator(withKnobs)
  .add("商品基本信息", () => {
    const baseInfo = [{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1息1信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'}];
    return <DetailInfo baseInfo={baseInfo} />;
  });
