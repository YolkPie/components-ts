import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SearchInput from "./index.tsx";

storiesOf("UI组件|SearchInput", module)
  .addDecorator(withKnobs)
  .add(
    "搜索栏",
    () => {
      return <SearchInput isHasBtn={true} />;
    }
  );
