import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'
import Image from '../Image/index.tsx'
import LoadingImg from './assets/loading.png'
import ErrorImg from './assets/error.png'

interface IProps {
  title: string,
  logo: string,
  subtitle?: string,
  renderSubtitle?: () => {},
  onClick?: () => {},
  customClass?: string,
}

interface IState {
}

class ShopCard extends Component<IProps, IState> {


  _getSubtitleConetnt() {
    const {
      subtitle,
      renderSubtitle
    } = this.props
    if (subtitle && subtitle.length) {
      return subtitle
    }
    if (renderSubtitle) {
      return renderSubtitle()
    }
    return ''
  }
  
  _handleClick() {
    const {
      onClick
    } = this.props
    if (onClick) {
      onClick()
    }
  }

  render () {
    const {
      title,
      logo,
      children,
      customClass
    } = this.props
    return (
      <div className={classnames(styles.shopcard, {
        customClass
      })} onClick={() => this._handleClick()}>
        <div className={styles.shopcard__header}>
          <div className={styles.shopcard__logowrap}>
            <Image className={styles.shopcard__logo} src={logo} />
          </div>
          <div className={styles.shopcard__topright}>
            <p className={styles.shopcard__title}>{title}</p>
            <div className={styles.shopcard__subtitle}>{this._getSubtitleConetnt()}</div>
          </div>
        </div>
        <div className={styles.shopcard__body}>
          {children}
        </div>
      </div>
    )
  }
}

export default ShopCard
