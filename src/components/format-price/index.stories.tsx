import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import FormatPrice from "./index.tsx";
import { color } from "../../../node_modules/@storybook/addon-knobs/dist/index";

storiesOf("UI组件|FormatPrice", module)
  .addDecorator(withKnobs)
  .add(
    "格式化价格",
    () => {
      return <FormatPrice 
        price={9999.99} 
        style={{color:'#f20000'}}
      />;
    }
  );
