import React, { Component } from "react";
import { formatPrice } from "../../utils";
import "./index.scss";

export default class Btn extends Component {
  // 跳转结算
  gotoOrder = () => {
    const { gotoOrder } = this.props;
    if (gotoOrder && typeof gotoOrder === "function") {
      gotoOrder();
    }
  };

  render() {
    const { auctionBaseInfo } = this.props;
    const startPrice = auctionBaseInfo && auctionBaseInfo.startPrice;
    const displayStatus = auctionBaseInfo && auctionBaseInfo.displayStatus;
    const price = formatPrice(startPrice);
    const priceArr = price.toString().split(".");
    const integer = priceArr[0];
    const decimal = priceArr[1];

    return (
      <div>
        {/*{Number(displayStatus) !== 10 && (*/}
        <div styleName="btn-container">
          <div styleName="left">
            <div styleName="price-txt">新人专享</div>
            <div styleName="price-flag">¥</div>
            {startPrice > 0 && (
              <div styleName="price">
                <div>{integer}</div>
                {decimal && decimal > 0 && (
                  <div styleName={`${integer > 0 ? "decimal" : ""}`}>
                    .{decimal}
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            styleName="right"
            onClick={() => {
              this.gotoOrder();
            }}
          >
            立即购买
          </div>
        </div>
        {/* )} */}
        {/*{Number(displayStatus) === 10 && (*/}
        {/*<div styleName="off-btn">很抱歉，商品已下架</div>*/}
        {/*)}*/}
      </div>
    );
  }
}
