import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import HotPai from "./index.tsx";


storiesOf("搜索页组件|HotPai", module)
  .addDecorator(withKnobs)
  .add("热拍组件", () => {
    const hotList = [{url: '5555',title: '热门吃吃h发动机开关和克里斯朵夫韩国如果广东福建开关和飞机开关',position: 2,imageUrl:'//img13.360buyimg.com/img/jfs/t1/126738/24/3584/32944/5ed47652E417918ef/7ab70d7b11e43241.png'},{url: '5555',title: '热门吃吃',imageUrl:'//img13.360buyimg.com/img/jfs/t1/126738/24/3584/32944/5ed47652E417918ef/7ab70d7b11e43241.png'},{url: '5555',title: '热门吃吃',position: 2},{url: '5555',title: '热门吃吃'}]
    const callBack = (url:any) => {
       alert(url)
    }
    return <div>
            <HotPai 
              title='热拍榜'
              hotList={hotList} 
              callBack = {callBack}
            />
          </div>
  });
