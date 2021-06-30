import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import DropDownSelect from "./index.tsx";

storiesOf("UI组件|DropDownSelect", module)
  .addDecorator(withKnobs)
  .add(
    "下拉选择框",
    () => {
      const data = [
        '全部',
        '选项1',
        '选项2',
        '选项3',
        '选项4',
      ]
      return <DropDownSelect data={data}/>;
    }
  );
