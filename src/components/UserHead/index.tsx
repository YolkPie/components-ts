import React, { Component } from "react";
import css from './index.css'

interface UserHeadProps {
}

interface UserHeadState {
}

class UserHead extends Component<UserHeadProps, UserHeadState> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className={css.userhead__container}>
        <div className={css.userhead__img__wrap}>
          <div className={css.userhead__img}></div>
        </div>
        <div className={css.userhead__name}>晴空万里</div>
        <div className={css.userhead__level}></div>
      </div>
    )
  }
}

export default UserHead;
