import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Readme from "./README.md";

import Toast from ".";

storiesOf("UI组件|Toast", module)
  .addDecorator(withKnobs)
  .add(
    "Toast提示",
    () => {
      const msg = text("消息", "网络异常，请稍后重试~");
      const top = text("距离顶部高度", "300px");
      return Toast.info(msg, 3000, top);
    },
    {
      info: {
        text: `info`
      },
      notes: { markdown: Readme }
    }
  );
