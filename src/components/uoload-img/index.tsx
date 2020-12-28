import React, { Component } from "react";
import styles from './index.scss'

export default class UploadImg extends Component {
  render() {
    return (
      <div className={styles.upload_img_container}>
        <div className={styles.upload_wrap}>
          <input
            type="file"
            accept="image/*"
            name="file"
            className={styles.input_img}
          />
        </div>
        <div className={styles.upload_txt}> 上传图片 </div>
      </div>
    );
  }
}
