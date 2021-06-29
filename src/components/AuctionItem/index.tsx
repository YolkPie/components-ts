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
  displayStatus?: number
}

interface Props {
  itemInfo:IGood, 
  realTimeData:IRealTimeItem, 
  getRealTimeData: (list: any[]) => {},
  addCountdown: (paimaiId: number, cuntdown:(item:any) => void, self:any) => void, 
  removeCountdown: (iteminfo: any) => void
}

interface States {
  startTime: number,
  remainTime: number,
  endTime: number,
  statusCode: number,
  endRealStatus: boolean,
}
let timer:any = null
class AuctionItem extends Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      startTime: -1,
      remainTime: -1,
      endTime: -1,
      statusCode: -1,
      // 结束后请求实时接口状态
      endRealStatus: true,
    }
  }
  

  componentDidMount() {
    const {addCountdown, itemInfo} = this.props;
    const {startTime, endTime, remainTime} = itemInfo;

    this.setState({
      startTime,
      endTime,
      remainTime,
    });

    addCountdown(itemInfo.id, this.countdown, this);

    timer = setTimeout(() => {
      this.countdown(this)
    }, 1000)
  }

  componentWillUnmount() {
    const {removeCountdown, itemInfo} = this.props;
    removeCountdown(itemInfo)
    clearInterval(timer)
  }

  renderPriceTag() {
    let priceTag = '当前价';
    const { auctionStatus, displayStatus } = this.props.realTimeData
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

  renderPriceNum() {
    const {currentPriceCN} = this.props.realTimeData
    return currentPriceCN
  }

  countdown( self:any ) {
    const {getRealTimeData} = self.props;
    const {displayStatus, id} = self.props.itemInfo;
    const {auctionStatus, endTime} = self.props.realTimeData;
    let status = allStatus[ getStatus(displayStatus, auctionStatus) ];
    self.setState({
      statusCode: status.statusCode,
    });
    if ( status.statusCode ) {
      if (endTime - new Date().getTime() > 0) {
        self.setState({
          endRealStatus: true,
        })
        self.setState({
          remainTime: endTime - new Date().getTime(),
        })
      } else {
        if(self.state.endRealStatus) {
          getRealTimeData([self.props.itemInfo])
          self.setState({
            endRealStatus: false,
          })
        }
      }
    } else {
      // 预计 开始
      if ( new Date() >= self.state.startTime ) {
        self.setState({
          statusCode: 1,
        }, () => {
          getRealTimeData([self.props.itemInfo])
        })
      }
    }
  }

  getTimeStr( statusCode:number, startTime:number, endTime:number, remainTime:number ) {
    // 预告中
    if ( statusCode === 0 ) {
      let Moment = startTime;
      // return `${formateTimeNumber(Moment.month() + 1)}月${formateTimeNumber(Moment.date())}日  ${formateTimeNumber(Moment.hour())}:${formateTimeNumber(Moment.minute())}开始`;
      return `开始`;
    }
// 已结束
    if ( statusCode === 2 ) {
      let Moment = new Date(endTime);
      return '结束'
      // return `${formateTimeNumber(Moment.month() + 1)}月${formateTimeNumber(Moment.date())}日  ${formateTimeNumber(Moment.hour())}:${formateTimeNumber(Moment.minute())}结束`;
    }
    // 拍卖中
    if ( statusCode === 1 ) {
      // let Moment = moment.duration(remainTime);
      return (
        <div>剩余{remainTime}结束</div>
        // <Fragment>
        //   剩
        //   {Moment.asDays() > 1 &&
        //   <span>{parseInt(Moment.asDays())}天</span>}
        //   {<span>{Moment.get('hours')}小时</span>}
        //   {Moment.get('minutes') !== 0 &&
        //   <span>{formateTimeNumber(Moment.get('minutes'))}分钟</span>}
        //   {Moment.get('days') === 0 &&
        //   <span>{formateTimeNumber(Moment.get('seconds'))}秒</span>}
        // </Fragment>
      );
    }
  }

  truncateTitle(title:string) {
    if (title.length >= 28) {
      return `${title.substring(0, 28)}...`;
    } else {
      return title;
    }
  }

  gotoItemPage(paimaiId:number) {
    window.location.href = `//mpaimai.jd.com/${paimaiId}`
  }

  render() {
    const {addCountdown, removeCountdown, itemInfo, realTimeData, getRealTimeData} = this.props;
    const { statusCode, startTime, remainTime } = this.state;
    const { endTime, auctionStatus } = realTimeData;
    const { displayStatus,province, city } = itemInfo;

    let Status = allStatus[getStatus(displayStatus, auctionStatus)];

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
            <div className={styles.InfoPrice}>
                <div className={styles.InfoPriceTag}>{this.renderPriceTag()}</div>
                <div className={styles.InfoPriceNumTag} style={{color:Status.color}}>￥</div>
                <div className={styles.InfoPriceNum} style={{color:Status.color}}>{this.renderPriceNum()}</div>
            </div>
            <div className={styles.InfoDetail}>
                <div className={styles.InfoDetailLoc}>{province}</div>
                <div className={styles.InfoDetailLine}></div>
                <div className={styles.InfoDetailLoc}>{province + city}</div>
            </div>
            <div className={styles.InfoTime} style={{backgroundColor: statusCode === 0 || statusCode === 1 || statusCode === 2 ? '#f3f3f3' : '#fff'}}>
                <div className={styles.InfoTimeTag} style={{color:Status.color}}>{Status.msg}</div>
                <div className={styles.InfoTimeDesc}>{this.getTimeStr(statusCode, startTime, endTime, remainTime)}</div>
            </div>
        </div>
      </div>
    )
  }
}

export default AuctionItem;
