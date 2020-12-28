import { string } from 'prop-types'
import React, { Component } from 'react'
import styles from './index.scss'

interface Props {
    baseInfo: any[],
    consultTel: string[]
}

class TelLine extends Component<Props> {

    render() {
        const {
            baseInfo,
            consultTel
        } = this.props
        return (
            <div>
                <div className={styles.info}>
                    <ul className={styles.info__itemst}>
                    { baseInfo && baseInfo.length && (
                        baseInfo.map((infoitem={label:string,value:string}, index:number) => {
                            return (
                                <li className={styles.info__itemline} key={'telline'+index}>
                                    <p className={styles.info__label}>{infoitem.label}：</p>
                                    <p className={styles.info__value}>{infoitem.value}</p>
                                </li>
                            )
                        })
                    )}
                        <li className={styles.info__itemtele}>
                            <div>
                                <p className={styles.info__label}>联系方式：</p>
                                {consultTel.length !==0 && consultTel.map((tel:string, index:number) => {
                                    return (
                                        <p className={styles.info__value_tele} key={index}>{tel}</p>
                                    )
                                })}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TelLine
