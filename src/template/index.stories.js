import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs";
import Readme from "./README.md";

import Template from ".";

storiesOf("开发模板|模板", module)
  .addDecorator(withKnobs)
  .add(
    "基本模板",
    () => {
      const name = text("名字", "模板");
      return <Template text={name} />;
    },
    {
      info: {
        text: `info`
      },
      notes: { markdown: Readme }
    }
  );
