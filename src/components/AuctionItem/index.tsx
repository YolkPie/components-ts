import React, {Component} from 'react';
import styles from './index.scss'
const allStatus = {
  inprocess: {
    statusCode: 1,
    color: '#F2270C',
    msg: '拍卖中',
  },
  preannounce: {
    statusCode: 0,
    color: '#268E66',
    msg: '预告中',
  },
  end: {
    statusCode: 2,
    color: '#8A8A8A',
    msg: '已结束',
  },
  respite: {
    statusCode: 6,
    color: '#8A8A8A',
    msg: '已暂缓',
  },
  stop: {
    statusCode: 7,
    color: '#8A8A8A',
    msg: '已中止',
  },
  withdraw: {
    statusCode: 5,
    color: '#8A8A8A',
    msg: '已撤回',
  },
  nodata: {
    statusCode: -1,
    color: '#fff',
    msg: '',
  },
}

const getStatus = ( displayStatus:number, auctionStatus:number ) => {
  let status = 'nodata';
  if ( Number(displayStatus) === 1 ) {
    switch ( auctionStatus ) {
      case 1:
        status = 'inprocess';
        break;
      case 2:
        status = 'end';
        break;
      case 0:
        status = 'preannounce';
        break;
    }
  } else {
    switch ( Number(displayStatus) ) {
      case 3:
        if ( Number(auctionStatus) === 1 ) {
          status = 'respite';
        } else {
          status = 'end';
        }
        break;
      case 5:
        status = 'withdraw';
        break;
      case 6:
        status = 'respite';
        break;
      case 7:
        status = 'stop';
        break;
    }
  }
  return status;
}
export const formateTimeNumber = (num:number) => num >= 10 ? num : `0${num}`;
const forMatTime = (timestamp: number): string => {
  let Moment = new Date(timestamp);
      return `${formateTimeNumber(Moment.getMonth() + 1)}月${formateTimeNumber(Moment.getDate())}日  ${formateTimeNumber(Moment.getHours())}:${formateTimeNumber(Moment.getMinutes())}`;
}

const forMatRemainTime = (remainTime: number): string => {
  if (remainTime && remainTime > 0) {
    const remainTimeS = Math.floor(remainTime / 1000)
    const day = Math.floor(remainTimeS / 60 / 60 / 24);
    const hour = Math.floor((remainTimeS / 60 / 60) % 24);
    const minutes = Math.floor((remainTimeS / 60) % 60);
    const secondss = Math.ceil(remainTimeS % 60);
    const seconds = secondss > 9 ? secondss.toString() : `0${secondss}`
    return `剩${day>0?day+'天':''}${hour}小时${minutes}分${seconds}秒`;
  }else{
    return ''
  } 
}



export interface IGood {
  id?: number;
  paimaiId?: number;
  skuId: number;
  title: string;
  productImage: string;
  auctionType: number;
  province: string;
  city: string;
  jdPrice: number;
  firstCateId: number;
  secondCateId?: number;
  startTime: number;
  endTime: number;
  remainTime: number;
  publishSource: number;
  bidCount: number;
  uvCount: number;
  bidPersonCount: number;
  currentPrice: number;
  currentPriceStr: string;
  auctionStatus: number;
  labelStrs: string[];
  displayStatus?: number;
}

export interface IRealTimeItem {
  accessNum?: number;
  bidCount?: number;
  currentPrice?: number;
  currentPriceCN?: string;
  auctionStatus?: number;
  accessNumber?: number;
  endTime?: number,
  currentPriceWithUnit: number,
  displayStatus: number,
  remainTime: number,
}

interface Props {
  itemInfo:IGood, 
  index: number,
  RealTimeDataItem:IRealTimeItem, 
  getRealTimeData: (index:number,list: any[], isRecommend:boolean) => void,
  addCountdown: (paimaiId: number, cuntdown:(item:any) => void, self:any) => void, 
  removeCountdown: (paimaiId: number) => void,
  getNowTopCard: (paimaiId: number) => void,
}

interface States {
  startTime: number,
  remainTime: number,
  endTime: number,
  statusCode: number,
  originRemainTime: number,
  currentPriceWithUnit:number
}
let timer:any = null
let yugao_remainTime:number = null
class AuctionItem extends Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      startTime: -1,
      remainTime: -1,
      endTime: -1,
      statusCode: -1,
      originRemainTime: -1,
      currentPriceWithUnit: -1
    }
  }

  

  UNSAFE_componentWillReceiveProps(props:any) { 
    if(this.state.originRemainTime ===undefined || this.state.statusCode !== props.RealTimeDataItem.auctionStatus){
      this.refreshStatus(props.RealTimeDataItem)
    }else if(Math.abs(this.state.originRemainTime-props.RealTimeDataItem.remainTime)>2000){//筛选出新请求的9条数据，因为别的没有更新请求，是不变的
      let time_height = Math.abs(this.state.remainTime-props.RealTimeDataItem.remainTime)
      //接口新更新的时间和此时倒计时时间相差多，代表延时拍卖状态下，从新开始倒计时，此时需要更新状态,或者组件倒计时结束变更状态时需要更新组件
      if( time_height > 3000){
        this.refreshStatus(props.RealTimeDataItem)
      }
    }
    
  }
  

  componentDidMount() {
    if(this.state.originRemainTime ===undefined || this.state.statusCode !== this.props.RealTimeDataItem.auctionStatus){
      this.refreshStatus(this.props.RealTimeDataItem)
    }else if(Math.abs(this.state.originRemainTime-this.props.RealTimeDataItem.remainTime)>2000){//筛选出新请求的9条数据，因为别的没有更新请求，是不变的
      let time_height = Math.abs(this.state.remainTime-this.props.RealTimeDataItem.remainTime)
      //接口新更新的时间和此时倒计时时间相差多，代表延时拍卖状态下，从新开始倒计时，此时需要更新状态,或者组件倒计时结束变更状态时需要更新组件
      if( time_height > 3000){
        this.refreshStatus(this.props.RealTimeDataItem)
      }
    }
  }

  refreshStatus(RealTimeDataItem?:any){   
    if(RealTimeDataItem){
      const {startTime, endTime, remainTime, displayStatus, auctionStatus} = RealTimeDataItem;
      let status = allStatus[ getStatus(displayStatus, auctionStatus) ];
  
      this.setState({
        startTime,
        endTime,
        remainTime,
        currentPriceWithUnit: RealTimeDataItem.currentPriceWithUnit,
        originRemainTime: remainTime,
        statusCode: status.statusCode,
      });
      yugao_remainTime = remainTime
      //如果在拍卖中，或者即将开始，才添加倒计时，否则不添加
      if(status.statusCode==1 || (remainTime<5000 && 0<=remainTime)){
        const {addCountdown, itemInfo} = this.props;
        setTimeout(() => {
          addCountdown(itemInfo.id, this.countdown, this);
        }, 1000)
      }
    }
    
  }

  componentWillUnmount() {
    const {removeCountdown, itemInfo} = this.props;
    removeCountdown(itemInfo.id)
  }

  renderPriceTag() {
    let priceTag = '当前价';
    const { auctionStatus, displayStatus } = this.props.RealTimeDataItem
    if (Number(displayStatus) === 1) {
      switch (auctionStatus) {
        case 1:
          priceTag = '当前价';
          break;
        case 2:
          priceTag = '当前价';
          break;
        case 0:
          priceTag =  '起拍价';
          break;
      }
    }
    return priceTag
  }

  countdown( self:any ) {
    const {getRealTimeData, index} = self.props;
    const {remainTime} = self.state
    
    if ( self.state.statusCode == 1 ) {//进行中  
        if (remainTime > 86400000) {
          
        }else if (remainTime > 1000) {
          let s = JSON.stringify(remainTime)
          let ss = Number(s)
          self.setState({
            remainTime: ss-1000,
          })
        } else if( 0 <= remainTime && remainTime <= 1000){
            const {removeCountdown, itemInfo} = self.props;
            removeCountdown(itemInfo.id)
            self.setState({
              statusCode: 2,
              remainTime: -1
            },()=>{
              //为了防止900毫秒时刷新，然后500毫秒时又刷新问题，采用一下延时请求
              setTimeout(() =>{getRealTimeData(index, [self.props.itemInfo])},600)
            });
        }
    } else if(self.state.statusCode == 0){// 预告中，使用yugao_remainTime变量避免了不断的setState（节省性能）,因为预告中不用不断更新页面倒计时
        if (yugao_remainTime > 1000) {
          yugao_remainTime = yugao_remainTime-1000
        }else if ( 0 <= yugao_remainTime && yugao_remainTime <= 1000 ) {
          getRealTimeData(index, [self.props.itemInfo], [self.props.isRecommend])
        }
    }else{//结束、暂缓、中止、撤回

    }
  }

  getTimeStr( statusCode:number, startTime:number, endTime:number, remainTime:number ) {
    // 预告中
    if ( statusCode === 0 ) {
      return `${forMatTime(startTime)} 开始`
    }
    // 已结束
    if ( statusCode === 2 ) {
      return `${forMatTime(endTime)} 结束`
    }
    // 拍卖中
    if ( statusCode === 1 ) {
      return (<div>{forMatRemainTime(remainTime)}</div>);
    }
  }

  truncateTitle(title:string) {
    if (title && title.length >= 18) {
      return `${title.substring(0, 18)}...`;
    } else {
      return title;
    }
  }

  gotoItemPage(paimaiId:number) {
    this.props.getNowTopCard(paimaiId)
  }

  render() {
    const {itemInfo, RealTimeDataItem} = this.props;
    const { statusCode, remainTime } = this.state;
    const { province, city, startTime } = itemInfo;
    const { displayStatus,endTime, currentPriceWithUnit } = RealTimeDataItem
    let Status = allStatus[getStatus(displayStatus, statusCode)];

    return (
      <div className={styles.ItemContainer_card} onClick={() => {
        this.gotoItemPage(itemInfo.id);
      }}>
        <div className={styles.ImageComtainer}>
          <img className={styles.img} src={`//img1${itemInfo.id % 5}.360buyimg.com/img/s480x320_${itemInfo.productImage}`}></img>
          <div className={styles.ImageTagContainer}>
             <div className={styles.xiangouTag}>{'不限购'}</div>
             <div className={styles.loanTag}>{'可贷款'}</div>
          </div>
        </div>
        <div className={styles.InfoComtainer}>
            <div className={styles.InfoTitle}>{this.truncateTitle(itemInfo.title)}</div>
            {itemInfo.labelStrs.length && <div className={itemInfo.title.length < 16? styles.oneLine_icon:styles.InfoDetail_icon}>
                {itemInfo.labelStrs.map((label:string, indexx:number) => {
                    return (
                      indexx < 3 && <div key={indexx} className={styles.icon_item}>{label}</div>
                    )
                })}
            </div>}
            <div className={(itemInfo.labelStrs && itemInfo.labelStrs.length)?styles.InfoPrice:styles.heightMargin}>
                <div className={styles.InfoPriceTag}>{this.renderPriceTag()}</div>
                <div className={styles.InfoPriceNumTag} style={{color:Status.color}}>￥</div>
                <div className={styles.InfoPriceNum} style={{color:Status.color}}>{currentPriceWithUnit}</div>
            </div>
            <div className={styles.InfoDetail}>
                <div className={styles.InfoDetailLoc}>{province}</div>
                <div className={styles.InfoDetailLine}></div>
                <div className={styles.InfoDetailLoc}>{province + city}</div>
            </div>
            <div className={styles.InfoTime} style={{backgroundColor: (statusCode === 0 || statusCode === 1 || statusCode === 2) ? '#f3f3f3' : '#fff'}}>
                <div className={styles.InfoTimeTag} style={{backgroundColor:Status.color}}>{Status.msg}</div>
                <div className={styles.InfoTimeDesc}>{this.getTimeStr(statusCode, startTime, endTime, remainTime)}</div>
            </div>
        </div>
      </div>
    )
  }
}

export default AuctionItem;
