import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'

interface IProps {
  year: number,
  currentYear?: number,
  customClass?: string,
  onSelect?: (year: number) => {}
}

interface IState { }

class YearCard extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  selectYear(year: number) {
    const {
      onSelect
    } = this.props
    if (onSelect) {
      onSelect(year)
    }
  }

  render() {
    const {
      year,
      currentYear,
      customClass
    } = this.props

    return (
      <div
        className={classnames(styles.cardYear, customClass, currentYear === year ? styles.cardYearSelected : null)}
        onClick={() => this.selectYear(year)}
      >{year}年 年度</div>
    )
  }
}

export default YearCard
