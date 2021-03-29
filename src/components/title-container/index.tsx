import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'
interface iconObj {
  text?: string,
  iconImg?: string,
  id?: number
}

interface Props {
  moreIconObj?: iconObj,
  titleText: string,
  classMySelf: string,
  callback?:()=>{}
}

class TitleContainer extends Component<Props> {
  render () {
    const { titleText, moreIconObj, children, classMySelf, callback} = this.props
    return (
        <div className={styles.container + ' ' + classMySelf}>
            <div className={styles.container__title}>
                <div className={styles.container__title_text}>{titleText}</div>
                <div className={styles.container__icon} onClick={callback}>
                  <span className={styles.container__icon_text}>{moreIconObj.text}</span>
                  <img className={styles.container__icon_img} src={moreIconObj.iconImg} />
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
