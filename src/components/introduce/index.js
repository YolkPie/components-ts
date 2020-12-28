import React, { Component } from "react";
import "./index.scss";
import { pxToVw } from "../../utils";
import Attribute from "../attribute/index";

export default class Introduce extends Component {
  render() {
    const { auctionBaseInfo, productDescription, attributeInfo } = this.props;
    return (
      <div styleName="introduce-container">
        <div styleName="introduce-title-container">
          <div styleName="introduce-title-icon" />
          <div styleName="introduce-title">拍品详情</div>
        </div>

        {attributeInfo && (
          <Attribute
            auctionBaseInfo={auctionBaseInfo}
            attributeInfo={attributeInfo}
          />
        )}

        <div
          styleName="introduce-main"
          dangerouslySetInnerHTML={{
            __html: pxToVw(productDescription)
          }}
        />
      </div>
    );
  }
}
