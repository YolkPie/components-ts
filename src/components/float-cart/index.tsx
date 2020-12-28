import React,{Component} from 'react'
import styles from './index.css'

interface FloatCartProps {
  num: number
}

export default class FloatCart extends Component<FloatCartProps> {

  render(){
    const {num} = this.props
    return (
      <div className={styles.float_cart}>
        <div className={styles.cart} />
        {num > 0 && (
          <div className={styles.cart_num}>
            {Number(num) > 99 ? '99+' : num}
          </div>
        )}
      </div>
    )
  }
}

