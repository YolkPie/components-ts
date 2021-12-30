import React, {
    Component
} from 'react'
import styles from './index.scss'
import AuctionItem from '../AuctionItem/index.tsx'
import { boolean } from '../../../node_modules/@storybook/addon-knobs/dist/index'


const realTimeDate = {
    accessNum: 323,
    bidCount: 654765767665,
    currentPrice: 432434,
    currentPriceCN: '54355',
    auctionStatus: 2,
    accessNumber: 2,
    remainTime: 5465645,
    displayStatus: 1,
    currentPriceWithUnit: 5437867,
    endTime: 54325432545
  }
  const ITEM = {
    id:1111,
    startTime:15465436,
    endTime:1645643654657,
    remainTime:4535543,
    productImage:'jfs/t1/139764/7/9778/81412/5f75ecadE24346b75/baeb97f7fb26e8cd.png',
    title:'我是反馈给到发几个你说的你好填缝剂大概会我是反馈给到发几个你说的你好填缝剂大概会', 
    skuId: 543543,
    auctionType: 1,
    jdPrice: 5445,
    firstCateId: 5435,
    secondCateId: 5435,
    publishSource: 6,
    bidCount: 23,
    uvCount: 45,
    bidPersonCount: 4345,
    currentPrice: 453545,
    currentPriceStr: '7568946',
    auctionStatus: 1,
    province: '浙江省',
    city:'宁波市三级地址三级嗲只',
    labelStrs: ['我是边','我是边','我是边'],
  }
  const List = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]



interface Props {

}
interface States {
    SEARCH_TAB_FIXED: boolean,
    WINDOW_ITEM_INDEX: number
}
class ViewIndex extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            SEARCH_TAB_FIXED: false,
            WINDOW_ITEM_INDEX: 0
        }
        
      }

      componentDidMount () {
        document.querySelector('#viewBox_S').addEventListener('scroll', this.onPageScroll.bind(this),false)
      }
     onPageScroll(){
       const content = document.querySelector('#viewBox_Ss')
       
       if (content) {
         const { height, top } = content.getBoundingClientRect()
         let INDEX_ = Math.floor((top-280)/-159)
         this.setState({
            WINDOW_ITEM_INDEX: INDEX_ < 0 ? 0 : INDEX_
          })
       }
     }

     
   

    render() {
        const {WINDOW_ITEM_INDEX} = this.state
        return (
            <div className={styles.index_viewbox} id="viewBox_S" >
                <div className={styles.index_text}>当前视窗下标：{WINDOW_ITEM_INDEX}</div>
                <div id="viewBox_Ss" >
                {List.map((item: number, index: number) => {
                            return (
                                <AuctionItem 
                                    itemInfo={ITEM}
                                    index={index}
                                    RealTimeDataItem={realTimeDate}
                                    getRealTimeData={()=>{}}
                                    addCountdown={()=>{}}
                                    removeCountdown={()=>{}}
                                    getNowTopCard={()=>{}}
                                />
                            )
                        })
                    }
                </div>
                    
            </div>
        )
    }
}

export default ViewIndex
