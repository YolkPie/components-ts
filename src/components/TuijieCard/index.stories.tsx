import React,{useRef} from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import TuijieCard from "./index.tsx";

storiesOf("列表页组件|TuijieCard", module)
  .addDecorator(withKnobs)
  .add("拍卖-推介卡片", () => {
    let itemInfo = {
      id: 2,
      auctionType: 4,
      categoryName: "我是机构机构我是机构机构我是机构机构我是机构机构",
      name: "我是标题我是标题我是标题我是标题我是标题我是标题",
      mainImgUrl: "jfs/t1/205571/10/7376/205896/614a84f4Ed4520314/d1b9935d7c1976b3.jpg",
      vendorName: "我是标题",
      vendorId: 33,
      assetsDisposal: "我是标题",
      merchantsStatus: 2,
      categoryId: 5,
      onlookersNum: 5,
      intendedPersonNum: 65,
      referenceLowerLimitCN: 456,
      creditCapitalAndTerestCN: 6546,
    }
    
    const getNowTopCard = (itemInfo: any) => {
          
          alert('callback')
    }

    return <div  >
            <TuijieCard 
              itemInfo={itemInfo}
              index = {5} 
              getNowTopCard = {getNowTopCard}
            />
      </div>
  });
