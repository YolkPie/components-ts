import React, { Component } from "react";
import "./index.scss";
import { filterImg } from "../../utils";
import { MPing } from "../../points";

export default class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: props && props.recommendList
    };
  }

  formatArr = () => {
    const { recommendList } = this.state;
    if (recommendList.length > 0) {
      const baseArray = recommendList;
      const len = baseArray.length;
      const n = 2;
      const lineNum = len % n === 0 ? len / n : Math.floor(len / n + 1);
      const recommendListArr = [];
      for (let i = 0; i < lineNum; i++) {
        const temp = baseArray.slice(i * n, i * n + n);
        recommendListArr.push(temp);
      }
      this.setState({
        recommendList: recommendListArr
      });
    }
  };

  componentDidMount() {
    this.formatArr();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recommendList === this.props.recommendList) {
      return;
    }
    this.setState(
      {
        recommendList: nextProps.recommendList
      },
      () => {
        this.formatArr();
      }
    );
  }

  // 跳转商详页面
  gotoDetail = data => {
    const { gotoDetail } = this.props;
    if (gotoDetail && typeof gotoDetail === "function") {
      gotoDetail(data);
    }
  };

  render() {
    const { recommendList } = this.state;
    return (
      <div styleName="recommend-container">
        <div styleName="recommend-title-container">
          <div styleName="recommend-title-icon" />
          <div styleName="recommend-title">为你推荐</div>
        </div>
        <div styleName="recommend-main">
          <div styleName="left-clear" />
          {recommendList &&
            recommendList.length > 0 &&
            recommendList.map((val, i) => {
              return (
                <div styleName="recommend-info" key={i.toString()}>
                  {val &&
                    val.length > 0 &&
                    val.map((v, k) => {
                      return (
                        <div
                          styleName="goods-wrap"
                          key={k.toString()}
                          onClick={() => {
                            this.gotoDetail(v);
                          }}
                        >
                          <div styleName="goods-img-container">
                            <img
                              styleName="goods-img"
                              src={filterImg(v.productImage, "300x300")}
                              alt=""
                            />
                          </div>
                          <div styleName="goods-info">
                            <div>
                              <div styleName="goods-name">{v.title}</div>
                            </div>
                            <div styleName="goods-price-ext-info">
                              <div styleName="goods-price">
                                <div styleName="price-flag">¥</div>
                                <div styleName="price">{v.currentPriceStr}</div>
                              </div>
                              <div styleName="goods-follow">
                                {v.uvCount}次围观
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          <div styleName="right-clear" />
        </div>
      </div>
    );
  }
}
