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
  classMySelf: string,
  callback?:()=>{}
}

class TitleContainer extends Component<Props> {
  render () {
    const { titleText, rightText, children, classMySelf, iconImg, callback} = this.props
    return (
        <div className={styles.container + ' ' + classMySelf}>
            <div className={styles.container__title}>
                <div className={styles.container__title_text}>{titleText}</div>
                <div className={styles.container__icon} onClick={callback}>
                  <span className={styles.container__icon_text}>{rightText}</span>
                  <img className={styles.container__icon_img} src={iconImg} />
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
