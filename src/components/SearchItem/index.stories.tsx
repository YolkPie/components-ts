import React,{useRef} from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import SearchItem from "./index.tsx";

storiesOf("列表页组件|SearchItem", module)
  .addDecorator(withKnobs)
  .add("筛选项", () => {
    let CategoryList = [
      {labelId: 11,labelName: '标签1'},
      {labelId: 22,labelName: '标签到的2'},
      {labelId: 33,labelName: '标签3'},
      {labelId: 44,labelName: '标签4'},
      {labelId: 1,labelName: '标签1'},
      {labelId: 2,labelName: '标签2'},
      {labelId: 3,labelName: '标签3'},
      {labelId: 4,labelName: '标签4'},
      {labelId: 119,labelName: '标签1'},
      {labelId: 229,labelName: '标签2'},
      {labelId: 339,labelName: '标签3'},
      {labelId: 449,labelName: '标签4'},
    ]
    
    const ChooseMoreItem = (item:any) => {
          alert(item)
    }

    return <div  >
            <SearchItem 
              CategoryList={CategoryList}
              ItemTitle={'拍卖类目'}
              ChooseMoreItem={ChooseMoreItem}
            />
      </div>
  });
