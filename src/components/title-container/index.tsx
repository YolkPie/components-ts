import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface Props {
  iconImg?: string,
  href?: string,
  rightText?: string,
  titleText?: string,
  customerClass: string,
  callback?:()=>{}
}

class TitleContainer extends Component<Props> {
  render () {
    const { titleText, rightText, children, customerClass, iconImg, callback} = this.props
    return (
        <div className={styles.container + ' ' + customerClass}>
            <div className={styles.container__title}>
                <div className={styles.container__title__text}>{titleText}</div>
                <div className={styles.container__icon} onClick={callback}>
                  <span className={styles.container__icon__text}>{rightText}</span>
                  <img className={styles.container__icon__img} src={iconImg} />
                </div>
            </div>
            <div className={styles.container__con}>
                {children}
            </div>
        </div>
    )
  }
}

export default TitleContainer
