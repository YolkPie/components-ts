import React, { Component } from "react";
import css from './index.css'

interface CollectProps {
}

interface CollectState {
  isCollect:boolean,
}

class Collect extends Component<CollectProps, CollectState> {

  constructor(props: any) {
    super(props)
    this.state={
      isCollect:false,
    }
  }

  handleCollect(){
    let {isCollect} = this.state
    this.setState({
      isCollect:!isCollect,
    })
  }

  render() {
    const {isCollect} = this.state
    return (
      <div 
        className={[css.collect__container, isCollect?css.collected:""].join(" ")}
        onClick={()=>{
          this.handleCollect()
        }}
      >
        <div className={css.collect__icon}></div> 
        <div className={css.collect__txt}>{isCollect?"已收藏":"收藏"}</div> 
      </div>
    )
  }
}

export default Collect;
