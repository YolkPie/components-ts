import React,{useRef} from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import ScrollX from "./index.tsx";

storiesOf("列表页组件|Scrool-X", module)
  .addDecorator(withKnobs)
  .add("横向滑动icon", () => {
    let labelList = [
      {labelId: 0,labelName: '全部', select: true},
      {labelId: 22,labelName: '标签2'},
      {labelId: 33,labelName: '标签3'},
      {labelId: 44,labelName: '标签4'},
      {labelId: 13,labelName: '标签11'},
      {labelId: 23,labelName: '标签21'},
      {labelId: 34,labelName: '标签31'},
      {labelId: 45,labelName: '标签41'},
    ]
    
    const resetLabelList = (list: any[]) => {
      alert('返回当前选中list')
      console.log(list)
    }

    return <div  >
            <ScrollX 
              labelList={labelList}
              resetLabelList={resetLabelList}
            />
      </div>
  });
