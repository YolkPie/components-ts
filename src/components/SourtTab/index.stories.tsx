import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import SourtTab from "./index.tsx";


storiesOf("列表页组件|SourtTab", module)
  .addDecorator(withKnobs)
  .add("排序tab", () => {
    const chooseTabClick = (id: number) => {
      alert(id)
    }
    const list = [{
      id: 8,
      name: '综合推荐',
      sourtName: '综合推荐',
    },{
        id: 22,
        name: '开始时间从高到低',
        sourtName: '时间倒序',
      },{
        id: 23,
        name: '开始时间从低到高',
        sourtName: '时间顺序',
      },{
        id: 24,
        name: '意向人数升序',
        sourtName: '人数倒序',
      }]

    return <div>
            <SourtTab 
              sourtList={list}
              chooseTab={chooseTabClick}
            />
          </div>
    ;
  });
