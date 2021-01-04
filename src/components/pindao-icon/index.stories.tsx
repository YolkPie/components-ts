import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import IconCard from "./index.tsx";
import './index.scss'

storiesOf("首页组件|pindao-icon", module)
  .addDecorator(withKnobs)
  .add("金刚位ICON", () => {
    const iconList = [{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',tips:'不限购',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'},{title:'图标一',href:'链接一',iconimg:'https://img12.360buyimg.com/imagetools/jfs/t1/129423/38/9794/786/5f3a34d7E98ce8a73/d8a8f13a2bb7ff9a.png'}];
    return <IconCard iconList={iconList} />;
  });
