import React, { Component } from 'react'
import css from './index.css'

interface ProgressProp {
  [propName: string]: any
}

interface ProgressState {
  index: number,
  priceSelectType:number
}

export default class SearchTab extends Component<ProgressProp, ProgressState> {

  constructor(props:any){
    super(props)
    this.state = {
      index: 0,
      priceSelectType:0
  };
  }

  handleSearchTab(index:number) {
    this.setState({
      index
    },()=>{
      if(index===2){
        let {priceSelectType} = this.state
        console.log("priceSelectType=",priceSelectType)
        if(priceSelectType===0 || priceSelectType===2){
          priceSelectType = 1
        }else if(priceSelectType===1){
          priceSelectType=2
        }
        console.log("priceSelectType==",priceSelectType)
        this.setState({
          priceSelectType
        })
      }else{
        this.setState({
          priceSelectType:0
        })
      }
    })
  }

  render() {
    const {index, priceSelectType} = this.state

    return (
        <div className={css.container}>
          <div
            className={[css.container__tab, index===0?css.container__tab_cur:''].join(' ')}
            onClick={()=>{
              this.handleSearchTab(0)
            }}
          >
            综合
          </div>
          <div
            className={[css.container__tab, index===1?css.container__tab_cur:''].join(' ')}
            onClick={()=>{
              this.handleSearchTab(1)
            }}
          >
            销量
          </div>
          <div
            className={[css.container__tab, index===2?css.container__tab_cur:''].join(' ')}
            onClick={()=>{
              this.handleSearchTab(2)
            }}
          >
            <div>价格</div>
            <div className={css.container__price}>
              <div
                className={[css.container__price_icon,css.container__price_icon_top,priceSelectType===1?css.container__price_icon_top_cur:''].join(' ')}
              />
              <div
                className={[css.container__price_icon,css.container__price_icon_down,priceSelectType===2?css.container__price_icon_down_cur:''].join(' ')}
              />
            </div>
          </div>
            <div
              className={[css.container__tab, index===3?css.container__tab_cur:''].join(' ')}
              onClick={()=>{
                this.handleSearchTab(3)
              }}
            >
              筛选
              <div
                className={css.container__sieve}
              />
            </div>
        </div>
    )
  }
}
