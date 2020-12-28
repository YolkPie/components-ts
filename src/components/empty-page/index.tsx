import React, { Component } from 'react'
import styles from './index.css'

export default class EmptyPage extends Component {

  render() {
    return (
      <div className={styles.empty_page}>
        <div className={styles.empty_page_img_container}>
          <img
            className={styles.empty_page_img}
            src='https://m.360buyimg.com/img/jfs/t1/146199/14/19578/33011/5fe0440cE93818f4d/df550eba266fb5b2.png'
          />
        </div>
        <div className={styles.empty_page_txt}>暂无数据</div>
        <div className={styles.empty_page_btn}>点击重试</div>
      </div>
    )
  }
}
