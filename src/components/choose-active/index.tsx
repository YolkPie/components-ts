import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface labelItem {
  name: string,
  id: number,
  [propName: string]: string | number | boolean;
}
interface Props {
  labelList: labelItem[],
  customerClass: string,
  chooseClick?:(item:any)=>{}
}

interface IState {
  myChooseList: any[],
  formatList: any[]
}

class ChooseActive extends Component<Props, IState> {

  initFormat = () => {
    const { labelList } = this.props
    labelList.map((item) => {
      if(!item.selected){
        item.selected = false
      }    
    })
    return labelList
  }

  state: IState = {
    myChooseList : [],
    formatList: this.initFormat()
  };
  
  chooseClick = (item:any) => {
    let newFormatList = JSON.parse(JSON.stringify(this.state.formatList)) 
    for(let i=0; i<this.state.formatList.length; i++){
      if(newFormatList[i].id === item.id){
        if(item.selected){
          newFormatList[i].selected = false
        }else{
          newFormatList[i].selected = true
        }
        break;
      }
    }
    this.setState({
      formatList: newFormatList
    },() => {
      let myChooseList = []
      for(let j=0; j<this.state.formatList.length; j++){
        if(this.state.formatList[j].selected){
          myChooseList.push(this.state.formatList[j])
        }
      }
      alert(JSON.stringify(myChooseList))
    })    
  }

  render () {
    const { customerClass } = this.props
    const { formatList } = this.state
    return (
        <div className={styles.icon__ul}>
           { formatList && formatList.length && (
              formatList.map((infoitem:labelItem, index:number) => {
                  return (
                      <div className={customerClass + ' ' + (infoitem.selected ? styles.icon__active : styles.icon__li)} key={index} onClick={() => this.chooseClick(infoitem)}>
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
