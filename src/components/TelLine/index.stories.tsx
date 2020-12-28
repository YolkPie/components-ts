import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import TelLine from "./index.tsx";
import './index.scss'

storiesOf("单品页组件|TelLine", module)
  .addDecorator(withKnobs)
  .add("商品底部按钮", () => {
    const consultTel = ['123243','432143254325','43254432545']
    const baseInfo = [{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'},{label:'标签1',value: '信息1'}];
    return <TelLine baseInfo={baseInfo} consultTel={consultTel}/>;
  });
