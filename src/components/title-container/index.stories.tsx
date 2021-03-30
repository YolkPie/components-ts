import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import TitleContainer from "./index.tsx";
import './index.scss'

storiesOf("单品页组件|TitleContainer", module)
  .addDecorator(withKnobs)
  .add("内容盒子", () => {
    const titleText = '我是传入的标题';
    const rightText = '查看更多'
    const iconImg = 'https://img11.360buyimg.com/imagetools/jfs/t1/129015/4/9454/511/5f326d1dE23f1747b/c8f5996a8badbdcd.png'
    const _callBack = function(){
        alert(titleText + rightText)
    }
    return <TitleContainer titleText={titleText} iconImg = {iconImg} rightText = {rightText} callback = {_callBack}>
              <div>插槽内容</div>
          </TitleContainer>
  });
