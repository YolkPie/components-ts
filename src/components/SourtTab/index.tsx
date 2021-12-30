import React, {
    Component
} from 'react'
import styles from './index.scss'
import SourtBox from '../SourtBox/index.tsx'

  export interface sourtListItem {
    id: number,
    sourtName: string,
    name: string,
  }

interface Props {
    sourtList:sourtListItem[],
    chooseTab: (id: number) => void,
}
interface States {
    sortField: number,
    showSourtList: boolean,
    sourtName: string
}
class SourtTab extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            sortField: 8,
            showSourtList: false,
            sourtName: '综合推荐'
        }
        this.chooseSourtListMy = this.chooseSourtListMy.bind(this)
        
      }

     SourtOrigin(value1: number, value2: number) {
        let value = this.state.sortField == value1 ? value2 : value1;
        this.setState({
            sortField: value,
            showSourtList: false,
            sourtName: '综合推荐'
        },() => {
            this.props.chooseTab(value)
        })
    }
    SourtOriginF() {
        this.setState({
            sortField: this.state.sortField > 4? this.state.sortField: 8,
            showSourtList: true,
        })
    }

    sourtListClick(value: number, name: string) {
        this.setState({
            sortField: value,
            showSourtList: false,
            sourtName: name
        },() => {
            this.props.chooseTab(value)
        })
    }
    chooseSourtListMy(value: number, name: string) {
        this.setState({
            sortField: value,
            showSourtList: false,
            sourtName: name
        },() => {
            this.props.chooseTab(value)
        })
    }

    render() {
        const {
            sourtList
        } = this.props
        const {showSourtList, sortField, sourtName} = this.state
        return (
            <div className={styles.index__filtertab_f}>
                <div onClick={()=>this.SourtOriginF()} className={sortField>8?styles.mainbar_item_up:(sortField> 4?styles.mainbar_item_down:styles.mainbar_item_nor)}>{sourtName}</div>
                <div onClick={()=>this.SourtOrigin(4,3)}  className={sortField===4?styles.mainbar_item_up:(sortField===3?styles.mainbar_item_down:styles.mainbar_item_nor)}>价格</div>
                <div onClick={()=>this.SourtOrigin(2,1)} className={sortField===2?styles.mainbar_item_up:(sortField===1?styles.mainbar_item_down:styles.mainbar_item_nor)}>结束时间</div>
                <div onClick={()=>this.SourtOrigin(0, 0)} className={sortField===0?styles.mainbar_item_red:styles.mainbar_item_hui}>机构</div>
                {showSourtList && <SourtBox
                                    sourtList={sourtList}
                                    sortField={sortField}
                                    sortName={sourtName}
                                    chooseSourtList={this.chooseSourtListMy}
                                    />}
            </div>
        )
    }
}

export default SourtTab
