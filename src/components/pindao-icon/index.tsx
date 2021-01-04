import { string } from 'prop-types'
import React, { Component } from 'react'
import styles from './index.scss'

interface Props {
    iconList: any[]
}

class IconCard extends Component<Props> {

    goIconClick = (href:string): void => {
        window.location.href = href
    }

    render() {
        const {
            iconList
        } = this.props
        return (
            <div>
                <div className={styles.iconcard}>
                    <ul className={styles.iconcard_itemsul}>
                        {iconList.length !==0 && iconList.map((iconitem, index:number) => {
                            return (
                                <li className={styles.iconcard_itemsli} key={index} onClick={() => this.goIconClick(iconitem.href)}>
                                    <img className={styles.iconcard_img} src={iconitem.iconimg} alt=''></img>
                                    <div className={styles.iconcard_text} >{iconitem.title}</div>
                                    {iconitem.tips && <div className={styles.iconcard_hot}>{iconitem.tips}</div>}
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
         </div>
        )
    }
}

export default IconCard
