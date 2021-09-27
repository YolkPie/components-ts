import React, {
    Component
} from 'react'
import styles from './index.scss'
import SearchItem from '../SearchItem/index.tsx'
import ScrollX from '../Scroll-X/index.tsx'

export interface ItemLabel {
    labelId: number,
    labelName: string,
    select?: boolean
  }

interface Props {
    labelList: ItemLabel[],
    filterSubmit: () => void,
    resetAll: () => void,
}
interface States {
    showFilterBox: number,
}
class RightSearch extends Component<Props, States> {
    state: States = {
        showFilterBox: 0,
    }
    resetAll = () => {
        this.props.resetAll()
    }
    filterSubmit = () => {
        this.setState({
          showFilterBox: 2
        })
        this.props.filterSubmit()
    }

    showFilterBoxClick =() => {
        this.setState({showFilterBox:1})
    }
    resetLabelList = (list: any[]) => {
        console.log(list)
      }

    render() {
        const {
            showFilterBox,
        } = this.state
        const { labelList } = this.props
        let CategoryList = [
            {labelId: 11,labelName: '标签1'},
            {labelId: 22,labelName: '标签2'},
            {labelId: 33,labelName: '标签3'},
            {labelId: 44,labelName: '标签4'},
            {labelId: 1,labelName: '标签1'},
            {labelId: 2,labelName: '标签2'},
            {labelId: 3,labelName: '标签3'},
            {labelId: 4,labelName: '标签4'},
          ]
          
          const ChooseMoreItem = (item:any) => {
                alert(item)
          }
        return (
            <div>
                <div className={styles.index__filtertab_s}>
                    <div className={styles.swiperbar}>
                        <ScrollX
                            labelList={labelList}
                            resetLabelList={this.resetLabelList}
                        />
                    </div>
                    <div className={styles.sourtbar} onClick={this.showFilterBoxClick}>筛选</div>
                </div>
                {showFilterBox!==0 && <div className={showFilterBox===1?styles.filterbox_show :(showFilterBox===2?styles.filterbox_hide:styles.index__filterbox)}>
                    <div className={styles.filtercon}>
                        <div className={styles.filtercon_main}>
                            <SearchItem 
                            CategoryList={CategoryList}
                            ItemTitle={'拍卖类目'}
                            ChooseMoreItem={ChooseMoreItem}/>
                        </div>
                        <div className={styles.filtercon_bottom}>
                            <div className={styles.filtercon_bottom_reset} onClick={this.resetAll}>重置</div>
                            <div className={styles.filtercon_bottom_ok} onClick={this.filterSubmit}>确定</div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default RightSearch
