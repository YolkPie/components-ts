import React, {
    Component
} from 'react'
import styles from './index.scss'

export interface ItemLabel {
    labelId: number,
    labelName: string,
    select?: boolean
  }

interface Props {
    CategoryList: ItemLabel[],
    ItemTitle: string,
    ChooseMoreItem: (item:ItemLabel) => void,
}
interface States {
    hideitem: boolean,
    CategoryListMe: ItemLabel[],
}
class SearchItem extends Component<Props, States> {
    private textInput: HTMLInputElement;
    constructor(props: Props) {
        super(props);
        this.state = {
            hideitem: false,
            CategoryListMe: this.props.CategoryList
        }
    }
    
    ChooseMoreItemMe(item:ItemLabel){
        let originList = this.state.CategoryListMe
        let newList = JSON.parse(JSON.stringify(originList))
        newList.forEach((value:ItemLabel, index:number) => {
            if (item.labelId === value.labelId) {
                value.select = !value.select;
            }
        });
        this.setState({
            CategoryListMe: newList
        });
        this.props.ChooseMoreItem(item)
    }

    render() {
        const {
            hideitem,
            CategoryListMe
        } = this.state
        const { ItemTitle } = this.props
        return (
            <div className={styles.filtercon_main_item}>
                <div className={styles.filtercon_main_titlebox}>{ItemTitle}
                    {CategoryListMe.length > 9 && <div onClick={() => {this.setState({hideitem: !hideitem})}} className={hideitem?styles.filtercon_main_titlehide:styles.filtercon_main_titleup} >{hideitem?'展开':'收起'}</div>}
                </div>
                <div className={hideitem ? styles.filtercon_main_ulhide:styles.filtercon_main_ul}>
                    {CategoryListMe.map((item, index) => {
                        return (
                            <div className={item.select?styles.filter_active:styles.filtercon_main_li}  key={index+'_'+item.labelId} onClick={() => {this.ChooseMoreItemMe(item)}}>
                                {item.labelName}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SearchItem
