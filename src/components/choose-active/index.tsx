import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface Props {
  lableList: any[],
  classMySelf: string,
  nowrap: boolean,
  chooseClick?:(item:any)=>{}
}

interface IState {
  myChooseList: any[],
  famateList: any[]
}

class ChooseActive extends Component<Props, IState> {

  initFaMate = () => {
    const { lableList } = this.props
    lableList.map((item) => {
         item.selected = false
    })
    return lableList
  }

  state: IState = {
    myChooseList : [],
    famateList: this.initFaMate()
  };
  
  chooseClick = (item:any) => {
    let newFamateList = JSON.parse(JSON.stringify(this.state.famateList)) 
    for(let i=0; i<this.state.famateList.length; i++){
      if(newFamateList[i].id === item.id){
        if(item.selected){
          newFamateList[i].selected = false
        }else{
          newFamateList[i].selected = true
        }
        break;
      }
    }
    this.setState({
      famateList: newFamateList
    },() => {
      let myChooseList = []
      for(let j=0; j<this.state.famateList.length; j++){
        if(this.state.famateList[j].selected){
          myChooseList.push(this.state.famateList[j])
        }
      }
      alert(JSON.stringify(myChooseList))
    })    
  }

  render () {
    const { classMySelf } = this.props
    const { famateList } = this.state
    return (
        <div className={styles.icon__ul}>
           { famateList && famateList.length && (
              famateList.map((infoitem:any, index:number) => {
                  return (
                      <div className={classMySelf + ' ' + (infoitem.selected ? styles.icon__active : styles.icon__li)} key={index} onClick={() => this.chooseClick(infoitem)}>
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
