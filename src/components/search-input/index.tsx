import React,{Component} from 'react';
import css from './index.css';

interface SearchInputProps {
  isHasBtn:boolean,
  placeholder:string
}

interface SearchInputState {
  isShowClear: boolean,
  keyWord: string
}

export default class SearchInput extends Component<SearchInputProps,SearchInputState> {

  constructor(props:any){
    super(props)
    this.state={
      isShowClear:false,
      keyWord:''
    }
  }

  changeFunc = (e:any) => {
    console.log("e=",e.target.value)
    const keyWord = e.target.value
    let _isShowClear = false
    if(keyWord){
      _isShowClear = true
    }
    this.setState({
      isShowClear: _isShowClear,
      keyWord
    })
  }

  clearKeyWord=()=>{
    this.setState({
      isShowClear: false,
      keyWord:''
    })
  }

  gotoSearch=()=>{
    alert("进入搜索页面")
  }

  render(){
    const {isHasBtn,placeholder} = this.props
    const {isShowClear,keyWord} = this.state
    return (
      <div className={css.search_container}>
        <div className={css.search_input_wrap}>
          <div className={css.search_input_icon}></div>
          {isShowClear && <div className={[css.clear_input_icon,isHasBtn?css.has_btn:''].join(' ')} onClick={()=>{
            this.clearKeyWord()
          }}></div>}
          <input type='text' placeholder={placeholder || '请输入搜索关键字'} onChange={(e)=>{
            this.changeFunc(e)
          }} className={[css.search_input,isHasBtn?css.has_btn:''].join(' ')} value={keyWord} />
          {isHasBtn && 
            <div className={css.search_btn} onClick={()=>{
              this.gotoSearch()
            }}>搜索</div>
          }    
        </div>
      </div>
    );
  }
}