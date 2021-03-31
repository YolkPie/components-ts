import React, { Component } from 'react'
import styles from './index.css'

export default class EmptyPage extends Component {

  render() {
    return (
      <div className={styles.empty_page}>
        <div className={styles.empty_page_img_container}>
          <div className={styles.empty_page_img} />
        </div>
        <div className={styles.empty_page_txt}>暂无数据</div>
        <div className={styles.empty_page_btn}>点击重试</div>
      </div>
    )
  }
}
