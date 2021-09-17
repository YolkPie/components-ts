import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'

interface ISelectResult {
  year: number,
  month: number
}

interface IProps {
  year: number,
  currentYear?: number,
  currentMonth?: number,
  minTimestamp?: number,
  maxTimestamp?: number,
  customClass?: string,
  onSelect?: (selectResult: ISelectResult) => {}
}

interface IState {
  monthList: number[]
}

class MonthCard extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      monthList: []
    }
  }

  selectMonth(month: number) {
    const {
      onSelect,
      year
    } = this.props
    if (onSelect) {
      onSelect({
        year,
        month
      })
    }
  }

  getMonthList() {
    const {
      year,
      minTimestamp,
      maxTimestamp
    } = this.props
    const current = new Date()
    // 最小日期默认为1月1日0点，最大日期默认为年底
    const minDate = minTimestamp ? new Date(minTimestamp) : new Date(year, 0, 1, 0, 0, 0)
    const maxDate = maxTimestamp ? new Date(maxTimestamp) : new Date(year,11,31,23, 59, 59)
    const yearMinDate = new Date(year, 0, 1, 0, 0, 0)
    const yearMaxDate = new Date(year,11,31,23, 59, 59)
    const min = Math.max(minDate.valueOf(), yearMinDate.valueOf())
    const max = Math.min(maxDate.valueOf(), yearMaxDate.valueOf())
    if (min > max) {
      this.setState({
        monthList: []
      })
      return
    }
    const minMonth = new Date(min).getMonth() + 1
    const maxMonth = new Date(max).getMonth() + 1
    let monthList = []
    for (let i = minMonth; i <= maxMonth; i++) {
      monthList.push(i)
    }
    this.setState({
      monthList
    })
  }

  componentDidMount() {
    this.getMonthList()
  }

  render() {
    const {
      year,
      currentYear,
      currentMonth,
      customClass
    } = this.props

    const {
      monthList
    } = this.state

    return (
      <div className={styles.cardMonth}>
        <div className={styles.cardMonthHeader}>{year}年</div>
        <div className={styles.cardMonthBodyWrap}>
          <div className={styles.cardMonthBody}>
            {
              monthList.map(month => {
                return (
                  <div
                  className={classnames(styles.cardMonthItem, customClass, currentYear === year && currentMonth === month ? styles.cardMonthItemSelected : null)}
                  onClick={() => this.selectMonth(month)}
                >
                  {month}月
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

export default MonthCard
