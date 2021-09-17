import React, {
  Component
} from 'react'
import styles from './index.scss'
import rankImg1 from './images/rank_icon1.png'
import rankImg2 from './images/rank_icon2.png'
import rankImg3 from './images/rank_icon3.png'

interface IProps {
  rank: number,
  text: number | string
}

interface IState {}

class MonthCard extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
  }

  render() {
    const {
      rank,
      text
    } = this.props

    const rankImg = rank === 1 ? rankImg1 : rank === 2 ? rankImg2 : rankImg3

    return (
      <div className={styles.rankItem}>
        <div className={styles.rankItemRank}>
          {
            rank <= 3 ? (
              <img className={styles.rankItemRankBg} src={rankImg}></img>
            ) : (
              <span className={styles.rankItemRankNumber}>{rank}</span>
            )
          }          
        </div>
        <div className={styles.rankItemName}>{text}</div>
      </div>
    )
  }
}

export default MonthCard
