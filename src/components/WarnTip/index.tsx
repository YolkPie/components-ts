import React, {
  Component
} from 'react'
import styles from './index.scss'

interface IProps {
  showIcon: number,
  text: string,
  children: any
}

interface IState { }

class WarnTip extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      showIcon,
      text,
      children
    } = this.props
    return (
      <div className={styles.warnTip}>
        {
          showIcon && (
            <div className={styles.warnContainer}>
              <img className={styles.warnImage} src='//img13.360buyimg.com/imagetools/jfs/t1/199060/14/17736/2575/6197099dE87bbb439/c6683a5b1187d201.png'/>
            </div>
          )
        }
        <div className={styles.warnTipTextContainer}>
          <p className={styles.warnTipText}>{text}</p>
        </div>
        <div className={styles.warnExtra}>{children}</div>
      </div>
    );
  }
}

export default WarnTip
