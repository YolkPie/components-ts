import React, { Component } from "react";
import "./index.scss";

export default class Attribute extends Component {
  render() {
    const { auctionBaseInfo, attributeInfo } = this.props;
    return (
      <div styleName="attribute-container">
        <div styleName="attribute">
          <div styleName="left">商品编号</div>
          <div styleName="right">
            {auctionBaseInfo && auctionBaseInfo.skuId}
          </div>
        </div>
        <div styleName="attribute">
          <div styleName="left base-info">基本信息</div>
          <div styleName="right" />
        </div>
        {attributeInfo &&
          attributeInfo.map((val, i) => {
            return (
              <div styleName="attribute" key={i.toString()}>
                <div styleName="left">{val.attributeName}</div>
                <div styleName="right">{val.attributeValueName}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
