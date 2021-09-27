import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import RightSearch from "./index.tsx";

storiesOf("列表页组件|RightSearch", module)
  .addDecorator(withKnobs)
  .add("搜索-右侧滑层", () => {
    let ItemLabel = [
      {labelId: 0,labelName: '全部'},
      {labelId: 22,labelName: '标签2'},
      {labelId: 33,labelName: '标签3'},
      {labelId: 44,labelName: '标签4'},
      {labelId: 1,labelName: '标签1'},
      {labelId: 2,labelName: '标签2'},
      {labelId: 3,labelName: '标签3'},
      {labelId: 4,labelName: '标签4'},
    ]
    
    const resetAll = () => {
      alert('重置操作')
    }
    const filterSubmit=() => {
      alert('确定按钮')
    }

    return <div  >
            <RightSearch 
              labelList ={ItemLabel}
              filterSubmit={filterSubmit}
              resetAll={resetAll}
            />
      </div>
  });
