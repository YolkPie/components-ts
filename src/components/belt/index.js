import React, { Component } from "react";
import "./index.scss";
import { formatPrice } from "../../utils";

export default class Belt extends Component {
  render() {
    const { auctionBaseInfo } = this.props;
    const startPrice = auctionBaseInfo && auctionBaseInfo.startPrice;
    const displayStatus = auctionBaseInfo && auctionBaseInfo.displayStatus;
    const assessmentPrice =
      (auctionBaseInfo && auctionBaseInfo.assessmentPrice) || "0";
    const price = formatPrice(startPrice);
    const priceArr = price.toString().split(".");
    const integer = priceArr[0];
    const decimal = priceArr[1];
    return (
      <div>
        {/*{Number(displayStatus) !== 10 && (*/}
        <div styleName="belt-container">
          <div styleName="price-wrap">
            <div styleName="price-container">
              <div styleName="price-txt">新人价</div>
              <div styleName="price-val">
                <div styleName="price-flag">¥</div>
                {startPrice > 0 && (
                  <div styleName="price">
                    <div>{integer}</div>
                    {decimal && decimal > 0 && (
                      <div styleName="decimal">.{decimal}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {assessmentPrice && assessmentPrice > 0 && (
              <div styleName="reference">
                <div styleName="reference-price-txt">拍卖参考价</div>
                <div styleName="reference-price">¥{assessmentPrice}</div>
              </div>
            )}
          </div>
        </div>
        {/*)}*/}

        {/*{Number(displayStatus) === 10 && <div styleName="off">商品已下架</div>}*/}
      </div>
    );
  }
}
