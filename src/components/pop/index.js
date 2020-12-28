import React, { Component } from "react";
import "./index.scss";
import { px2vw } from "../../utils";

export default class Pop extends Component {
  gotoCallShare = () => {
    const { gotoCallShare } = this.props;
    if (gotoCallShare && typeof gotoCallShare === "function") {
      gotoCallShare();
    }
  };

  render() {
    const { closePop, newComerInfo } = this.props;
    let type = 0; // 1享受过福利，2老顾客
    const newComerFlag =
      newComerInfo && newComerInfo.data && newComerInfo.data.newComerFlag;
    const hasOrder =
      newComerInfo && newComerInfo.data && newComerInfo.data.hasOrder;
    if (newComerFlag === false) {
      type = 2;
    } else if (hasOrder === true) {
      type = 1;
    }
    return (
      <div styleName="pop-container">
        <div
          styleName="layer"
          onClick={() => {
            closePop && closePop();
          }}
        />
        <div
          styleName="pop-main"
          style={{
            height: type === 1 ? px2vw(340) : px2vw(380)
          }}
        >
          {type === 2 && <div styleName="main-title">您已经是老顾客啦</div>}
          <div
            styleName="ext-title"
            style={{
              paddingTop: type === 1 ? px2vw(20) : px2vw(0),
              fontSize: type === 1 ? px2vw(30) : px2vw(26)
            }}
          >
            {type === 2 && (
              <span>
                抱歉,您已是老顾客!该商品为新人专享商品，可分享给您的朋友来购买哦～
              </span>
            )}
            {type === 1 && (
              <span>您已享受过新人福利啦，快邀请您的朋友来参与吧！</span>
            )}
          </div>
          <div
            styleName="btn"
            onClick={() => {
              this.gotoCallShare();
            }}
          >
            去分享
          </div>
          <div
            styleName="close"
            onClick={() => {
              closePop && closePop();
            }}
          />
        </div>
      </div>
    );
  }
}
