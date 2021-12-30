import React,{useRef} from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SearchBar from "./index.tsx";
// SearchInput = useRef<HTMLDivElement>();

storiesOf("列表页组件|SearchBar", module)
  .addDecorator(withKnobs)
  .add("搜索框-回显功能", () => {
    let keyword = '汽车'
    
    const searchByKeyWord = (keyword: string) => {
          keyword = keyword
          alert(keyword)
    }
    const togleShowMainPage = (togo: boolean) => {
      
    }
    

    return <div  >
            <SearchBar 
              // ref={(ref:any) => {SearchInput = ref}}
              togleShowMainPage={togleShowMainPage}
              searchMainList = {searchByKeyWord}  
              propkeyword={keyword}
              propsPlaceholder={'请输入搜索关键词'}
            />
      </div>
  });
