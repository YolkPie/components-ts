import React, {
    Component
} from 'react'
import styles from './index.scss'

interface Props {
    title: string,
    LeftIcon: string,
    deleteHistoryAll: () => void,
    deleteHistoryItem: (word:string) => void,
    searchMainList: (keyword:string) => void,
}

interface States {
    showDele: boolean,
    dataList: string[],
}
class HistoryCon extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showDele: false,
            dataList: [],
        }
      }

    deleteHistoryItem(word:string){
        this.props.deleteHistoryItem(word)
    }
    deleteHistoryAll(){
        this.props.deleteHistoryAll()
    }
    goSearchHistoryItem(keyword:string) {
        this.props.searchMainList(keyword)
    }

     componentWillMount(){
        const historyList = ['你的回顾1','你的回顾2','你的回顾3','你的回顾4',]

        this.setState({
            dataList:  historyList
        })
     }

    render() {
        const {
            title,
        } = this.props
        const {showDele, dataList} = this.state
        return (
            <div className={dataList.length !==0 ? styles.history: styles.none} >
                <div className={styles.commonTitle}>
                    <div className={styles.commonTitle__left}>
                        <div className={styles.commonTitle__left_text}>{title}</div>
                        <div className={styles.lefticon_hot}></div>
                    </div>
                    <div className={styles.commonTitle__right}>
                    {showDele && <div className={styles.commonTitle__right_f} onClick={this.deleteHistoryAll}>全部删除</div>}
                        {showDele && <div className={styles.commonTitle__right_s} onClick={() => this.setState({showDele: false})}>完成</div>}
                        {!showDele && <div className={styles.commonTitle__right_show} onClick={() => this.setState({showDele: true})}></div>}
                    </div>
                </div>
                <div className={styles.history__ul}>
                    {dataList.map((item, index) => {
                        return (
                            <div className={styles.history__li} key={index+'_'+item}>{showDele?item:''}
                                {!showDele && <div onClick={() => {this.goSearchHistoryItem(item)}}>{item}</div>}
                                {showDele && <div className={styles.history__deleitem} onClick={() => {this.deleteHistoryItem(item)}}></div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HistoryCon
