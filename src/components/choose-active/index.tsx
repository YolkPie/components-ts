import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface labelItem {
  name: string,
  id: number,
  selected?: boolean,
  [propName: string]: string | number | boolean;
}
interface Props {
  labelList: labelItem[],
  customerClass: string,
  callBack?:(item:labelItem) => {}
}

interface IState {
  formatList: labelItem[]
}

class ChooseActive extends Component<Props, IState> {

  _initFormat = () => {
    const { labelList } = this.props
    labelList.map((item) => {
      if(!item.selected){
        item.selected = false
      }    
    })
    return labelList
  }

  state: IState = {
    formatList: this._initFormat()
  };
  
  _chooseClick = (item:labelItem) => {
    const { callBack } = this.props
    let newFormatList = JSON.parse(JSON.stringify(this.state.formatList)) 
    for(let i=0; i<this.state.formatList.length; i++){
      if(newFormatList[i].id === item.id){
        if(item.selected){
          newFormatList[i].selected = false
        }else{
          newFormatList[i].selected = true
        }
        break
      }
    }
    this.setState({
      formatList: newFormatList
    },() => {
      callBack(newFormatList)
    })    
  }

  render () {
    const { customerClass } = this.props
    const { formatList } = this.state
    return (
        <div className={customerClass + ' ' + styles.icon__ul}>
           { formatList && formatList.length && (
              formatList.map((infoitem:labelItem, index:number) => {
                  return (
                      <div className={infoitem.selected ? styles.icon__active : styles.icon__li} key={index} onClick={() => this._chooseClick(infoitem)}>
                          <span className={styles.icon__text}>{infoitem.name ? infoitem.name : infoitem}</span>
                      </div>
                  )
              })
            )}
        </div>
    )
  }
}

export default ChooseActive
