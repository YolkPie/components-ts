import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import AgencyCard from "./index.tsx";


storiesOf("列表页组件|AgencyCard", module)
  .addDecorator(withKnobs)
  .add("机构卡片", () => {

    const item = {
      orgId:121,
      orgName: '感觉对方i素个好地方就开始老公',
      orgLogo: 'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
      publishSource: 9,
      products:[{
        paimaiId: 222,
        title: '',
        productImage: 'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
        currentPriceCN:'675897',
        status: 1,
        bidNum: 546
      },{
        paimaiId: 555,
        title: '',
        productImage: 'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
        currentPriceCN:'675897',
        status: 1,
        bidNum: 546
      },{
        paimaiId: 767,
        title: '',
        productImage: 'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
        currentPriceCN:'675897',
        status: 1,
        bidNum: 546
      },]
    }
    return <div>
            <AgencyCard 
              agencyItem={item}
            />
    </div>
    ;
  });
