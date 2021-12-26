import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from  './index.scss'

interface Props {
  label: string;
  value?: string | number;
  showArrow?: boolean;
  onClick?: () => {};
  customClass?: string;
  children?: React.ReactNode
}

class FormItem extends Component<Props> {
  render() {
    const {
      label,
      value,
      showArrow,
      onClick,
      customClass,
      children
    } = this.props
    return  (
      <div className={ classnames(styles['formitem'], customClass)} onClick={() => {
        onClick && onClick()
      }}>
        <label className={styles['formitem__label']}>{label}</label>
        <div className={styles['formitem__content']}>
          {
            children ? children : (
              <>
                <div className={styles['formitem__content__main']}>{value}</div>
                {showArrow ? (
                  <i className={styles['formitem__content__arrow']} />
                ) : ''}
              </>
            )
          }
        </div>
      </div>
    )
  }
}

export default FormItem;
