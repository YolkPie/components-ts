import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import FormItem from "./index.tsx";
import './index.scss'

function itemClickFunc() {
  console.log('formitem click')
}

storiesOf("UI组件|FormItem", module)
  .addDecorator(withKnobs)
  .add("表单Item", () => {
    return (
      <>
      <FormItem customClass="custom" label="收货地址" value="北京市朝阳区XXXXX街道XXXXX小区1栋1单元110" showArrow={true} onClick={itemClickFunc}/>
      <FormItem label="收货地址">
        <h5>我是自定义的内容</h5>
      </FormItem>
      </>
    );
  });
