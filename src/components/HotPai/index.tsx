import React, {
    Component
} from 'react'
import styles from './index.scss'

interface Props {
    title: string,
    hotList: hotItem[],
    LeftIcon: string,  
    callBack: (url:string) => {}
}
interface hotItem {
    url: string,
    title: string,
    position?: number,
    imageUrl?: string
}

interface States {
    showDele: boolean,
}
class HotPai extends Component<Props, States> {
    state: States = {
        showDele: false
    }

    goHotItem = (url:string) => {
        this.props.callBack(url)
    }

    render() {
        const {
            title,
            hotList,
        } = this.props

        return (
            <div className={hotList.length !==0 ? styles.hotpai: styles.none}>
                <div className={styles.commonTitle}>
                    <div className={styles.commonTitle__left}>
                        <div className={styles.lefticon_hot}>{title}</div>
                        <div className={styles.commonTitle__left_icon}></div>
                    </div>
                </div>
                <div className={styles.hotpai__ul}>
                    {hotList.map((item, index) => {
                        return (
                            <div className={styles['hotpai__li_'+index]} key={index+item.url} onClick={() => {this.goHotItem(item.url)}}>
                                <div className={styles.hotpai__text}>{item.title}</div>
                                { item.imageUrl && <img src={item.imageUrl} className={styles.hot_icon}/>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HotPai
