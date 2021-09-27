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
    labelList: ItemLabel[],
    resetLabelList: (list:ItemLabel[]) => void,
}
interface States {
    labelListMe: ItemLabel[],
}
class ScrollX extends Component<Props, States> {
    state: States = {
        labelListMe: this.props.labelList,
    }

    returnNewLabelIdList = (deleteId:number, myList:ItemLabel[]) => {
        //返回当前选中的id-list,是否加上当前传入值
        let arr = []
        for(let i=0; i< myList.length; i++){
            if(deleteId!=myList[i].labelId){
                if(myList[i].select){
                    arr.push(myList[i].labelId)
                }
            }
        }
        return arr
    }
    
    clickSwiper= (item:ItemLabel, index:number) => {
        const {labelListMe} = this.state
        let newList = JSON.parse(JSON.stringify(labelListMe))
    
        if(item.labelId===0){//点击了全部，其余成灰，
            newList.forEach((value:ItemLabel, index:number) => {
                value.select = index== 0 ? true: false;
            });
        }else{
            let newchooseIdList = this.returnNewLabelIdList(item.labelId,labelListMe)
            if (item.select) {//由选中变为非选中状态
                if(newchooseIdList.length==0){//切回全选了
                    newList.forEach((value:ItemLabel, index:number) => {
                      value.select = index== 0 ? true: false;
                    });
                }else{
                    newList.forEach((value:ItemLabel, index:number) => {
                      if (item.labelId === value.labelId) {
                        value.select = false;
                      }
                    });
                } 
            }else{//由非选中变为选中状态
                if(newchooseIdList.length==labelListMe.length-2){//切回全选了
                    newList.forEach((value:ItemLabel, index:number) => {
                        value.select = index== 0 ? true: false;
                    });
                }else{
                    newList.forEach((value:ItemLabel, index:number) => {
                        if(index==0){
                            value.select = false;
                        }
                        if (item.labelId === value.labelId) {
                            value.select = true;
                        }
                    });
                } 

            }   
        }
        this.setState({
            labelListMe: newList
        })
        this.props.resetLabelList(newList)

      }

    render() {
        const { labelListMe } = this.state
        return (
            <div className={styles.swiperbar}>
                {labelListMe.map((item, index) => {
                    return (
                        <div className={item.select?styles.swiper_active:styles.swiperbar_item} key={index+'_'+item.labelId} onClick={() => {this.clickSwiper(item, index)}}>
                            {item.labelName}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ScrollX
