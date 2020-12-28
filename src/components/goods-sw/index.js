import React, { Component } from "react";
import Swiper from "../swiper";
import { filterImg, px2vw } from "../../utils";
import "./index.css";

export default class GoodsSw extends Component {
  render() {
    const { data } = this.props;
    const max = data && data.length;

    return (
      <div styleName="swiper-img-wrap">
        {data && data.length > 0 && (
          <Swiper
            style={{ width: px2vw(750), height: px2vw(750) }}
            itemWidth={750}
            itemHeight={750}
            duration={3000}
            auto={false}
            loop={false}
            activeIndex={0}
            speed={1}
            isHorizontal
            dots={activeId => {
              if (max <= 1) return;
              // eslint-disable-next-line consistent-return
              return (
                <div styleName="dot">
                  <div styleName="dot-item">
                    <span styleName="dot-item-cur">{activeId + 2}</span>/
                    <span styleName="dot-item-total">{data.length}</span>
                  </div>
                </div>
              );
            }}
          >
            {data.map((val, i) => {
              return (
                <div key={i.toString()} styleName="swiper-item">
                  <img
                    alt=""
                    src={filterImg(val.path)}
                    styleName="swiper-img-item"
                    style={{ width: px2vw(750) }}
                    // style={{ width: px2vw(750), height: px2vw(750) }}
                  />
                </div>
              );
            })}
          </Swiper>
        )}
      </div>
    );
  }
}
