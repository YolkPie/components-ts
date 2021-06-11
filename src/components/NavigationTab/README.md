# 导航Tab

> 导航Tab组件，可选择是否fix定位。

## 参数说明

interface TabItem {
  name: string,
  value: string | number,
}

- customClass?: string, // 自定义样式class
- tabs: TabItem[], // tab数组
- initTab?: string | number, // 初始化tab（TabItem中value字段）
- isFixed?: boolean, // 是否需要吸顶
- onTabChange?: (value: string | number) => void // 点击切换



