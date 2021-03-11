import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SendTo from "./index.tsx";

storiesOf("UI组件|SendTo", module)
  .addDecorator(withKnobs)
  .add(
    "送至",
    () => {
      const addrText = '北京大兴区京东集团总部大楼C座'
      return <SendTo addrText={addrText} />;
    }
  );
