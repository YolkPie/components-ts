import React, {
    Component
} from 'react'
import styles from './index.scss'

  export interface agencyItem {
    orgId: number,
    orgName: string,
    orgLogo: string,
    publishSource: number,
    products: agencyPaiItem[],
  }
  export interface agencyPaiItem {
    paimaiId: number,
    productImage: string,
    currentPriceCN: string,
    title: string,
    status: number,
    bidNum: number,
  }

interface Props {
    agencyItem:agencyItem
}
interface States {
    itemVisible: boolean
}
class AgencyCard extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            itemVisible: false
        }
      }
    /**
     * 跳转机构详情页面
     */
     gotoAgencyDetail (id: number, publicsource: number) {
         console.log('go new page')
     }

    truncateTitle(title:string) {
        if (title.length >= 13) {
          return `${title.substring(0, 13)}...`;
        } else {
          return title;
        }
      }

    render() {
        const {
            agencyItem
        } = this.props
        return (
            <div className={styles.agencyItem} onClick={() => this.gotoAgencyDetail(agencyItem.orgId,agencyItem.publishSource)}>
                <div className={styles.agencyItem__top}>
                    <img className={styles.agencyItem__top_orglogo} src={`//img12.360buyimg.com/img/s320x320_${agencyItem.orgLogo}`}/>
                    <div className={styles.agencyItem__top_orgname}>{this.truncateTitle(agencyItem.orgName)}</div>
                    <div className={styles.agencyItem__top_look}>进店</div>
                </div>
                <div className={styles.agencyItem__pai}>
                      {agencyItem.products.length!==0 && agencyItem.products.map((item: agencyPaiItem, index:number) => {
                            return (
                                <div key={index+'_'+item.paimaiId}>
                                    <div className={styles.agencyItem__pai_imgbox} key={index+'_'+item.paimaiId}>
                                        <img className={styles.agencyItem__pai_img} src={`//img1${item.paimaiId % 5}.360buyimg.com/img/s320x320_${item.productImage}`} />
                                        { item.bidNum > 0 && <div className={styles.agencyItem__pai_bidnum}>{item.bidNum}{item.status===1?'次出价':'次围观'}</div>}
                                    </div>
                                    <div className={styles.agencyItem__pai_price}>{item.status===1?'当前价':'起拍价'}<i className={styles.agencyItem__pai_redColor}>¥</i><i className={styles.agencyItem__pai_priceNum}>{item.currentPriceCN}</i></div>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default AgencyCard
