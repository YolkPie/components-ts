import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'

interface IWeek {
  no: number,
  startTimestamp: number,
  endTimestamp: number,
  startTimeStr: string,
  endTimeStr: string
}

interface ISelectResult {
  year: number,
  week: number,
  start: number,
  end: number
}

interface IProps {
  year: number,
  currentYear?: number,
  currentWeek?: number,
  minTimestamp?: number,
  maxTimestamp?: number,
  customClass?: string,
  onSelect?: (selectResult: ISelectResult) => {}
}

interface IState {
  weekList: IWeek[]
}

class WeekCard extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      weekList: []
    }
  }

  selectWeek(week: number, start: number, end: number) {
    const {
      onSelect,
      year
    } = this.props
    if (onSelect) {
      onSelect({
        year,
        week,
        start,
        end
      })
    }
  }

  getWeekList() {
    const {
      year,
      minTimestamp,
      maxTimestamp
    } = this.props
    let weekList = []
    //设置为这一年开始日期
    const startDateOfYear = new Date(year, 0, 1)
    const minDateStamp = minTimestamp ? new Date(minTimestamp).valueOf() : 0
    const maxDateStamp = maxTimestamp ? new Date(maxTimestamp).valueOf() : 0
    //计算这一年有多少天
    const daysOfYear = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 366 : 365
    //366（365）/7=52.2(52.1)，所以一般一年有52周余1天或者2天，当这一年有366天时且第一天是周日，那么他的最后一天则是周一，这一年就有54周。
    let weekNum = 53
    //当年份是闰年且第一天是周日时有54周
    if (startDateOfYear.getDay() == 0 && daysOfYear == 366) {
      weekNum = 54
    }
    //首先算出这年的第一个星期日
    const firstSunday = new Date(year, 0, 1)
    let n = 6 - (firstSunday.getDay() + 6) % 7
    firstSunday.setDate(firstSunday.getDate() + n)
  
    //根据年份设置周数
    for (let i = 1; i <= weekNum; i++) {
      let startTimestamp = null
      let endTimestamp = null
      if (i == 1) {
        //计算这年第一个周一的日期
        const firstMonday = new Date(firstSunday.setDate(firstSunday.getDate() - 6))
        firstSunday.setDate(firstSunday.getDate() + 6)
        startTimestamp = firstMonday.valueOf()
        endTimestamp = firstSunday.valueOf()
      } else {
        const startDate = new Date(firstSunday.setDate(firstSunday.getDate() + 1))
        const endDate = new Date(firstSunday.setDate(firstSunday.getDate() + 6))
        startTimestamp = startDate.valueOf()
        endTimestamp = endDate.valueOf()
      }
  
      if (!(endTimestamp < minDateStamp || (maxDateStamp && startTimestamp > maxDateStamp))) {
        weekList.push({
          no: i,
          startTimestamp,
          endTimestamp,
          startTimeStr: this.getTimeStrByDay_Dotted(startTimestamp),
          endTimeStr: this.getTimeStrByDay_Dotted(endTimestamp)
        })
      }
      this.setState({
        weekList
      })
    }
  }

  getTimeStrByDay_Dotted(timestamp: number) {
    let timeArr = []
    let time = new Date(timestamp)
    timeArr.push(time.getFullYear())
    timeArr.push(time.getMonth() + 1)
    timeArr.push(time.getDate())
    timeArr.push(time.getHours())
    timeArr.push(time.getMinutes())
    timeArr.push(time.getSeconds())
    if (timeArr.length) {
      return `${timeArr[0]}.${timeArr[1]}.${timeArr[2]}`
    }
    return ''
  }

  componentDidMount() {
    this.getWeekList()
  }

  render() {
    const {
      year,
      currentYear,
      currentWeek,
      customClass
    } = this.props

    const {
      weekList
    } = this.state

    return (
      <div className={classnames(styles.cardWeek, customClass)}>
        <div className={styles.cardWeekHeader}>{year}年</div>
        <div className={styles.cardWeekBodyWrap}>
          <div className={styles.cardWeekBody}>
            {
              weekList.map((week) => {
                return (
                  <div
                    className={classnames(styles.cardWeekItem, (currentYear === year && currentWeek === week.no ? styles.cardWeekItemSelected : null))}
                    onClick={() => this.selectWeek(week.no, week.startTimestamp, week.endTimestamp)}
                  >
                    <span className={styles.cardWeekItemWeek}>第{week.no}周</span>
                    <span className={styles.cardWeekItemDate}>{week.startTimeStr}-{week.endTimeStr}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default WeekCard
