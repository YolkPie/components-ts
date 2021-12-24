import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Step from "./index.tsx";
import './index.scss'

storiesOf("UI组件|Step", module)
  .addDecorator(withKnobs)
  .add("进度条", () => {
    return <Step customClass="custom" steps={['选择收货方式', '签署成交确认书']} currentStep={1} />;
  });
