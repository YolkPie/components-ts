import React, {
    Component
} from 'react'
import styles from './index.scss'

const allTuijieStatus = {
    '1': {
      color: '#DA2622',
      tagText: '招商中',
    },
    '2': {
      color: '#AA8360',
      tagText: '已转竞价',
    },
    '3': {
      color: '#8A8A8A',
      tagText: '线下已处理',
    },
    '4': {
      color: '#8A8A8A',
      tagText: '招商结束',
    }
  }

interface ITuijieItem {
    id: number;
    auctionType: number;
    categoryName: string;
    name: string;
    mainImgUrl: string;
    vendorName: string;
    vendorId: number;
    assetsDisposal: string;
    merchantsStatus: number;
    categoryId: number;
    onlookersNum: number;
    intendedPersonNum: number;
    referenceLowerLimitCN: string;
    creditCapitalAndTerestCN: string;
  }

interface Props {
    itemInfo:ITuijieItem,
    index: number, 
    getNowTopCard: (itemInfo:ITuijieItem) => void,
}
interface States {

}
class TuijieCard extends Component<Props, States> {
    constructor(props: Props) {
      super(props);
      this.state = {
      }
  }
    
    truncateTitle(title:string) {
        if (title.length >= 28) {
          return `${title.substring(0, 28)}...`;
        } else {
          return title;
        }
    }

    gotoItemPage(itemInfo: ITuijieItem) {
        this.props.getNowTopCard(itemInfo)
    }

    renderStatusTag(status:number){
        let tuijieStatus = allTuijieStatus[status];
        return <div className={styles.ImageTag} style={{backgroundColor:tuijieStatus.color}}>{tuijieStatus.tagText}</div>
    }
    renderPriceTag(status:number, categoryId:number, referenceLowerLimitCN:string, creditCapitalAndTerestCN:string){
        let tuijieStatus = allTuijieStatus[status];
        return <div className={styles.InfoPrice}>
                <div className={styles.InfoPriceTag}>{categoryId===22?'债券本息':'参考价值'}</div>
                {((categoryId!==22&&referenceLowerLimitCN)||(categoryId===22&&creditCapitalAndTerestCN))&&<div className={styles.InfoPriceNumTag} style={{color:tuijieStatus.color}}>￥</div>}
                {<div className={styles.InfoPriceNum} style={{color:tuijieStatus.color}}>{categoryId===22?creditCapitalAndTerestCN :(referenceLowerLimitCN ? referenceLowerLimitCN:'暂未评估')}</div>}
            </div>
    }
    

    render() {
        const {itemInfo} = this.props;
        return (
            <div className={styles.TuijieContainer_card} onClick={() => {
                this.gotoItemPage(itemInfo);
              }}>
                <div className={styles.ImageComtainer}>
                  <img src={`//img1${itemInfo.id % 5}.360buyimg.com/img/s320x320_${itemInfo.mainImgUrl}!cc_220x220`}></img>
                  <div className={styles.ImageTagContainer}>{this.renderStatusTag(itemInfo.merchantsStatus)}</div>
                </div>
                <div className={styles.InfoComtainer}>
                  <div className={styles.InfoTitle_tuijie}>{this.truncateTitle(itemInfo.name)}</div>
                  {this.renderPriceTag(itemInfo.merchantsStatus, itemInfo.categoryId, itemInfo.referenceLowerLimitCN, itemInfo.creditCapitalAndTerestCN)}
                  
                  <div className={styles.InfoType}>
                      <div className={styles.InfoPriceTag}>资产类型</div>
                      <div className={styles.InfoTypeText}>{itemInfo.categoryName}</div>
                  </div>
                  <div className={styles.InfoType}>
                      <div className={styles.InfoPriceTag}>处置机构</div>
                      <div className={styles.InfoTypeText}>{itemInfo.assetsDisposal}</div>
                  </div>
                  <div className={styles.InfoDetail}>
                      <div className={styles.InfoDetailVisit}><i className={styles.InfoDetailVisitNum}>{itemInfo.intendedPersonNum}</i>意向人</div>
                      <div className={styles.InfoDetailLine}></div>
                      <div className={styles.InfoDetailVisit}><i className={styles.InfoDetailVisitNum}>{itemInfo.onlookersNum}</i>次围观</div>
                  </div>
                  
                </div>
              </div>
        )
    }
}

export default TuijieCard
