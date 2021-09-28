import React, {
    Component
} from 'react'
import styles from './index.scss'

interface Props {
    propsPlaceholder: string,
    propkeyword: string,
    togleShowMainPage: (togle:boolean) => void,
    searchMainList: (keyword:string, searchMainList?:boolean) => void,
}
interface States {
    keyWord: string,
    isFocus: boolean
}
class SearchBar extends Component<Props, States> {
    // private textInput: HTMLInputElement;
    constructor(props: Props) {
        super(props);
        this.state = {
            keyWord: '',
            isFocus: false
        }
        // this.Focus.bind(this)
        // this.Blur.bind(this)
        // this.setKeyWord.bind(this)
    }
    /**
     * 控制菜单项显隐
     */
     setKeyWord (e:any) {
        this.setState({
            keyWord: e.target.value
        })
    }
    Focus ()  {
        console.log(this)
        this.setState({
            isFocus: true
        })
        // this.props.togleShowMainPage(false)
    }
    Blur () {
        //延时是为了防止deleteSearch事件未触发，就导致隐藏
        setTimeout(() =>{
            this.setState({
                isFocus: false
            })
        },100)
    }
    deleteKeyWord () {
        this.setState({
            keyWord: ''
        })
        // this.textInput.focus()
    }
    deleteSearch () {
        this.setState({
            keyWord: '',
            isFocus: false
        })
    }
    goSearch (e:any) {
        let keycode = e.keyCode;
        if(keycode=='13') {
            e.preventDefault();  
            // this.textInput.blur()
            // this.props.togleShowMainPage(true)
            this.props.searchMainList(this.state.keyWord, true)
            //请求搜索接口
        }
    }
    propsSetKeyword(word:string){
        this.setState({
            keyWord: word
        })
    }

    render() {
        const {
            keyWord,
            isFocus
        } = this.state
        const { propsPlaceholder } = this.props
        return (
            <div className={styles.searchbar}>
                <div className={styles.searchbar__searchicon}></div>
                <form action='.' className={styles.searchbar__form}>
                    <input 
                   
                    type="search" className={isFocus ? styles.showColor : styles.hideColor} placeholder={propsPlaceholder||'请输入搜索关键词'} onChange={(e)=>{this.setKeyWord(e)}} value={keyWord} onFocus={()=>{this.Focus()}} onBlur={(e)=>{this.Blur()}} onKeyDown={(e)=>{this.goSearch(e)}}/>
                    </form>
                {keyWord && isFocus && <div className={styles.searchbar__deleteicon} onClick={()=>this.deleteSearch}></div>}
                {!isFocus && keyWord && <div className={styles.searchbar__textbox} onClick={()=>this.deleteKeyWord}>{keyWord}</div>}
            </div>
        )
    }
}

export default SearchBar
