import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

class Flow extends Component {

  render () {
    return (
      <div className={styles.flow}>
        <div>拍卖流程</div>
        <div className={styles.flow__content}>
          <div className={styles.flow__item}>
            <div className={styles.flow__con}>
              <div className={styles.flow__icon1}></div><p className={styles.flow__text}>交保证金</p>
            </div>
            <div className={styles.flow__arrow}></div>
          </div>
          <div className={styles.flow__item}>
            <div className={styles.flow__con}>
              <div className={styles.flow__icon2}></div><p className={styles.flow__text}>出价竞拍</p>
            </div>
            <div className={styles.flow__arrow}></div>
          </div>
          <div className={styles.flow__item}>
            <div className={styles.flow__con}>
              <div className={styles.flow__icon3}></div><p className={styles.flow__text}>竞拍成功</p>
            </div>
            <div className={styles.flow__arrow}></div>
          </div>
          <div className={styles.flow__item}>
            <div className={styles.flow__con}>
              <div className={styles.flow__icon4}></div><p className={styles.flow__text}>支付货款</p>
            </div>
            <div className={styles.flow__arrow}></div>
          </div>
          <div className={styles.flow__item}>
            <div className={styles.flow__con}>
              <div className={styles.flow__icon5}></div><p className={styles.flow__text}>交易完成</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Flow
