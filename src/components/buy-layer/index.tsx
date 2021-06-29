import React, { Component } from "react";
import styles from "./index.css";

interface BuyLayerProps {
  data: any[]
}

export default class BuyLayer extends Component<BuyLayerProps> {
  renderItems (data:any){
    return (
      <div>
        {data &&
          data.map((val:any) => {
            return (
              <div className={styles.Buylayer_bottom} key={`${val.skuId}`}>
                <div className={styles.Buylayer_goods_img}>
                  <img
                    className={styles.Image}
                    alt={val.goodsName}
                    // src={filterImg(val.imgUrl)}
                    src={val.imgUrl}
                  />
                </div>
                <div className={styles.Buylayer_goods_info}>
                  <div className={styles.Buylayer_goods_name}>{val.goodsName}</div>
                  <div className={styles.Buylayer_market_price}>
                    ¥{val.marketPrice}
                    {val.unit}
                  </div>
                  <div className={styles.Buylayer_jd_price}>
                    <span className={styles.Buylayer_jd_price_val}>
                      ¥{val.jdPrice}
                    </span>
                    <span className={styles.Buylayer_unit}>{val.unit}</span>
                  </div>
                  <div className={styles.Buylayer_goods_limit}>{val.limit}</div>
                  <div className={styles.Buylayer_operate}>
                    <div className={styles.subtract} />
                    <div className={styles.input}>{val.startBuyUnitNum}</div>
                    <div className={styles.add} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.Buylayer_container}>
        <div className={styles.Buylayer_top}>
          已选商品
          <div className={styles.Buylayer_close} />
        </div>
        {this.renderItems(data)}
      </div>
    );
  }
}
