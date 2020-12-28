import React, { Component } from "react";
import "./index.css";

export default class Notice extends Component {
  render() {
    const { content } = this.props;
    return (
      <div styleName="toast-notice">
        <div>{content}</div>
      </div>
    );
  }
}
