import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  date,
  number,
  color,
  text,
  array
} from "@storybook/addon-knobs";
import Readme from "./README.md";

import CountDown from ".";

storiesOf("UI组件|CountDown", module)
  .addDecorator(withKnobs)
  .add(
    "倒计时",
    () => {
      const seconds = date("时间", new Date(3600000));
      const width = number("宽", 60);
      const height = number("高", 56);
      const textColor = color("文字颜色", "#ffffff");
      const splitColor = color("分隔符颜色", "#f2140c");
      const background = text("背景色", "#ff6c33");
      const backgroundSize = text("背景图大小", "100% 100%");
      const fontSize = number("字体大小", 32);
      const type = text("类型", "");
      const splitSpace = number("分隔符间隔", 8);
      const splitFontWeight = text("分隔符字体", "normal");
      const borderRadius = array("圆角", [0, 0, 0, 0]);
      return (
        <CountDown
          seconds={seconds / 1000}
          width={width}
          height={height}
          fontSize={fontSize}
          color={textColor}
          background={background}
          backgroundSize={backgroundSize}
          splitColor={splitColor}
          type={type} // 简易默认版
          splitSpace={splitSpace}
          borderRadius={borderRadius}
          splitFontWeight={splitFontWeight}
          splitFontWeight="normal"
          splitDayColor="rgba(75, 22, 22, 0.2)"
          splitFontSize={16}
        />
      );
    },
    {
      info: {
        text: `倒计时`
      },
      notes: { markdown: Readme }
    }
  );
