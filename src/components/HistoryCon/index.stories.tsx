import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import HistoryCon from "./index.tsx";


storiesOf("搜索页组件|HistoryCon", module)
  .addDecorator(withKnobs)
  .add("历史记录模块", () => {

    const searchByKeyWord = (res:string) => {
       alert(res)
    }
    const deleteHistoryAll = () => {
      alert('删除全部')
    }
    const deleteHistoryItem = (res:string) => {
      alert('删除字段---'+res)
    }
    return <div>
            <HistoryCon 
              searchMainList = {searchByKeyWord} 
              deleteHistoryAll= {deleteHistoryAll} 
              deleteHistoryItem= {deleteHistoryItem} 
              title='搜索历史'  
            />
    </div>
    ;
  });
