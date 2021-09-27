import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import AuctionItem from "./index.tsx";


storiesOf("列表页组件|AuctionItem", module)
  .addDecorator(withKnobs)
  .add("拍品卡片", () => {

    const value = {
      id:1111,
      startTime:15465436,
      endTime:1645643654657,
      remainTime:4535543,
      productImage:'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
      title:'我是反馈给到发几个你说的你好填缝剂大概会我是反馈给到发几个你说的你好填缝剂大概会', 
      skuId: 543543,
      auctionType: 1,
      jdPrice: 5445,
      firstCateId: 5435,
      secondCateId: 5435,
      publishSource: 6,
      bidCount: 23,
      uvCount: 45,
      bidPersonCount: 4345,
      currentPrice: 453545,
      currentPriceStr: '7568946',
      auctionStatus: 1,
      province: '浙江省',
      city:'宁波市三级地址三级嗲只',
      labelStrs: ['我是边','我是边','我是边'],
    }
    const realTimeData = {
      '1111':{
        accessNum: 323,
        bidCount: 654765767665,
        currentPrice: 432434,
        currentPriceCN: '54355',
        auctionStatus: 2,
        accessNumber: 2,
        remainTime: 5465645,
        displayStatus: 1,
        currentPriceWithUnit: 5437867,
        endTime: 54325432545
      },
      '2222':{
        accessNum: 323,
        bidCount: 213424,
        currentPrice: 432434,
        currentPriceCN: '54355',
        auctionStatus: 1,
        accessNumber: 2,
        displayStatus: 1,
        endTime: 54325432545,
        remainTime: 5743856,
        currentPriceWithUnit: 5437867,
      },
    }
    const getRealTimeData = (index:number,list: any[], isRecommend:boolean) => {
       console.log()
    }
    const addCountdown = (paimaiId: number, cuntdown:(item:any) => void, self:any) => {
      console.log()
   }
   const removeCountdown = (paimaiId: number) => {
    console.log()
    }
    const getNowTopCard = (paimaiId: number) => {
      console.log()
    }

    return <div  >
            <AuctionItem 
              itemInfo={value}
              index={3}
              RealTimeDataItem={realTimeData[value.id]}
              getRealTimeData={getRealTimeData}
              addCountdown={addCountdown}
              removeCountdown={removeCountdown}
              getNowTopCard={getNowTopCard}
            />
      </div>
  });
