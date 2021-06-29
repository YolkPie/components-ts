import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'

interface IProps {
  title: string,
  customClass?: string
}

interface IState {}

class DetailTitle extends Component<IProps, IState> {

  render () {
    const {
      title,
      customClass,
    } = this.props

    return (
      <>
        {
          title && title.length ? (
            <div className={classnames(styles.detailTitle, customClass ? customClass : '')}>
              <i className={styles.titleIcon}></i>
              <h5 className={styles.title}>{title}</h5>
              <i className={styles.titleIcon}></i>
            </div>
          ) : null
        }
      </>
    )
  }
}

export default DetailTitle
