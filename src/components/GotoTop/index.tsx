import React, { Component } from "react";
import css from './index.css'

interface GotoTopProps {
}

interface GotoTopState {
}

class GotoTop extends Component<GotoTopProps, GotoTopState> {

  constructor(props: any) {
    super(props)
  }

  gotoTop(){
    alert("返回顶部")
    window.scrollTo(0,0);
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div 
        className={css.gototop__container}
        onClick={()=>{
          this.gotoTop()
        }}
      >
      </div>
    )
  }
}

export default GotoTop;
