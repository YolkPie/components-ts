import { string } from 'prop-types'
import React, { Component } from 'react'
import styles from './index.scss'

interface Props {
    baseInfo: any[]
}

class DetailInfo extends Component<Props> {

    render() {
        const {
            baseInfo
        } = this.props
        return (
            <div>
                <div className={styles.info}>
                    <ul className={styles.info__itemsul}>
                    { baseInfo && baseInfo.length && (
                        baseInfo.map((infoitem:any, index:number) => {
                            return (
                                <li className={styles.info__item} key={index}>
                                    <p className={styles.info__label}>{infoitem.label}：</p>
                                    <p className={styles.info__value}>{infoitem.value}</p>
                                </li>
                            )
                        })
                    )}
                        <li className={styles.clear}>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetailInfo
