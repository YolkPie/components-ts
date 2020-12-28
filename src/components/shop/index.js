import React, { Component } from "react";
import "./index.scss";
import { filterImg } from "../../utils";
import { MPing } from "../../points";

export default class Shop extends Component {
  gotoShop = () => {
    const { gotoShop } = this.props;
    if (gotoShop && typeof gotoShop === "function") {
      gotoShop();
    }
  };

  shopContact = () => {
    const { shopContact } = this.props;
    if (shopContact && typeof shopContact === "function") {
      shopContact();
    }
  };

  render() {
    const {
      shopMessage,
      shopStartIntegerBit,
      shopStartDecimal,
      shopStartEmpty
    } = this.props;

    console.log("shopStartEmpty=", shopStartEmpty);
    return (
      <div styleName="page-container">
        {shopMessage && (
          <div styleName="shop-container">
            <div
              styleName="shop-main"
              onClick={e => {
                if (e) {
                  e.stopPropagation();
                }
                this.gotoShop();
              }}
            >
              <div styleName="shop-logo-container">
                <img
                  styleName="shop-logo"
                  src={filterImg(shopMessage.shopLogo)}
                  alt=""
                />
              </div>
              <div styleName="shop-info">
                <div styleName="shop-name">{shopMessage.shopName}</div>
                {shopStartIntegerBit >= 2 && (
                  <div styleName="shop-ext">
                    <div styleName="shop-ext-title">店铺星级</div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      {shopStartIntegerBit > 0 && (
                        <div
                          styleName={`shop-rate rate-${shopStartIntegerBit}`}
                        ></div>
                      )}
                      {shopStartDecimal > 0 && shopStartDecimal < 50 && (
                        <div styleName="shop-rate rate-half-small"></div>
                      )}
                      {shopStartDecimal >= 50 && (
                        <div styleName="shop-rate rate-half-big"></div>
                      )}
                      {shopStartEmpty &&
                        shopStartEmpty.length > 0 &&
                        shopStartEmpty.map((val, i) => {
                          return (
                            <div
                              styleName="shop-rate rate-empty"
                              key={i.toString()}
                            ></div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
              <div styleName="more-icon" />
            </div>
          </div>
        )}

        <div styleName="shop-follow-container">
          <div styleName="follow-wrap">
            <div styleName="follow-value">
              {shopMessage.shopFollowCount || 0}
            </div>
            <div styleName="follow-title">关注人数</div>
          </div>
          <div styleName="clear-line"></div>
          <div styleName="follow-wrap">
            <div styleName="follow-value">
              {shopMessage.nowProductCount || 0}
            </div>
            <div styleName="follow-title">在拍拍品</div>
          </div>
          <div styleName="clear-line"></div>
          <div styleName="follow-wrap">
            <div styleName="follow-value">
              {shopMessage.hisProductCount || 0}
            </div>
            <div styleName="follow-title">历史拍品</div>
          </div>
        </div>

        <div styleName="btn-container">
          <div
            styleName="btn-area"
            onClick={e => {
              if (e) {
                e.stopPropagation();
              }
              this.shopContact();
            }}
          >
            <div styleName="btn-area-icon contact" />
            <div styleName="btn-area-txt">联系客服</div>
          </div>

          <div
            styleName="btn-area"
            onClick={e => {
              if (e) {
                e.stopPropagation();
              }
              this.gotoShop();
            }}
          >
            <div styleName="btn-area-icon enter" />
            <div styleName="btn-area-txt">进店逛逛</div>
          </div>
        </div>
      </div>
    );
  }
}
