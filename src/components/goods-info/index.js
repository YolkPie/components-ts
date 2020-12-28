import React, { Component } from "react";
import "./index.scss";

export default class GoodsInfo extends Component {
  render() {
    const { auctionBaseInfo } = this.props;
    return (
      <div styleName="goods-info-container">
        <div styleName="goods-info-main">
          <div styleName="goods-name">
            {auctionBaseInfo && auctionBaseInfo.title}
          </div>
          <div styleName="goods-ext">
            该商品为新人专享商品，价格优惠，品质保障，快快抢购吧！
          </div>
          <div styleName="goods-promotion-icon">新人专享</div>
        </div>
      </div>
    );
  }
}
