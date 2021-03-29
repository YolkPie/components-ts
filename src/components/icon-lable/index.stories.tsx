import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import IconLable from "./index.tsx";
import './index.scss'

storiesOf("列表页组件|IconLable", module)
  .addDecorator(withKnobs)
  .add("标签", () => {
    const lableList = ['我是标签11', {"name":'我是标签2', "id":22222}, {"name":'我是标签3', "id":3333}, {"name":'我是标签4', "id":44444}, {"name":'我是标签5', "id":5555}];
    const classMySelf = 'myselfLi'
    const nowrap = true
    return <div>
              <div>一行展示，超过隐藏</div>
              <IconLable lableList={lableList} classMySelf = {classMySelf} nowrap={nowrap}/>
              <div>折行展示</div>
              <IconLable lableList={lableList} classMySelf = {classMySelf} nowrap={false}/>
      </div>;
  });
