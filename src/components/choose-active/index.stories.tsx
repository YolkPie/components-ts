import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ChooseActive from "./index.tsx";
import './index.scss'

storiesOf("列表页组件|ChooseActive", module)
  .addDecorator(withKnobs)
  .add("标签", () => {
    const lableList = [{"name":'选项1', "id":22222}, {"name":'选项2', "id":3333}, {"name":'选项3', "id":44444}, {"name":'选项4', "id":5555}, {"name":'选项5', "id":666}, {"name":'选项6', "id":777}, {"name":'选项7', "id":888}];
    const classMySelf = 'myselfLi'
    const nowrap = true
    return <ChooseActive lableList={lableList} classMySelf = {classMySelf} nowrap={nowrap}/>
  });
