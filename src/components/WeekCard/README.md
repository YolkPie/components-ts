# 日期组件（周）

> 日期组件，展示指定年的周信息及选中状态。

## 参数说明

- year: number, // 年份
- currentYear: number // 选中的年份
- currentWeek?: number, // 选中的周数
- minTimestamp?: number, // 显示的最小日期
- maxTimestamp?: number, // 显示的最大日期
- customClass?: string, // 自定义class
- onSelect?: (selectResult: ISelectResult) => {} // 选择周数后的回调

interface ISelectResult {
  year: number,
  week: number,
  start: number,
  end: number
}



