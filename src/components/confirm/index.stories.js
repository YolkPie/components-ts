import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs";

import Confirm from ".";

storiesOf("UI组件|Confirm", module)
  .addDecorator(withKnobs)
  .add(
    "Confirm弹框",
    () => {
      const name1 = text("名字", "80元新人礼券");
      const name2 = text("名字", "大族广场店使用");
      const extText = text("名字", "请确认用券门店，领取后无法更改");
      const background = color("背景色", "#ffffff");
      const okText = text("ok按钮", "我收下了");
      const cancelText = text("cancel按钮", "暂时抛弃");
      return (
        <Confirm
          text1={name1}
          text2={name2}
          extText={extText}
          background={background}
          okText={okText}
          cancelText={cancelText}
          onOk={() => {
            console.log("ok!");
          }}
          onCancel={() => {
            console.log("cancel!");
          }}
        />
      );
    },
    {
      info: {
        text: `info`
      },
      notes: { markdown: `## Confirm` },
      cssresources: [
        {
          name: `bluetheme`,
          code: `<style>body { background-color: lightblue; }</style>`,
          picked: false
        }
      ]
    }
  );
