# 日期组件（月）

> 日期组件，展示指定年的月份信息及选中状态。

## 参数说明

- year: number, // 年份
- currentYear: number // 选中的年份
- currentMonth: number // 选中的月份
- minTimestamp?: number, // 展示的最小时间
- maxTimestamp?: number, // 展示的最大
- customClass?: string, // 自定义class
- onSelect?: (selectResult: ISelectResult) => {} // 选择月份后回调

interface ISelectResult {
  year: number,
  month: number
}



