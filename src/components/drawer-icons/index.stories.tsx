import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import DrawerIcons from "./index.tsx";

storiesOf("UI组件|DrawerIcons", module)
  .addDecorator(withKnobs)
  .add(
    "抽屉",
    () => {
      const gotoHome=()=>{
        alert('跳转首页')
      };
      const gotoMy=()=>{
        alert('跳转个人中心')
      };
      return <DrawerIcons gotoHome={gotoHome} gotoMy={gotoMy}/>;
    }
  );
