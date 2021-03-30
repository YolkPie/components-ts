import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface labelItem {
  name: string,
  id?: number,
  [propName: string]: string | number | boolean;
}

interface Props {
  labelList: labelItem[],
  customerClass: string,
  nowrap: boolean
}

class IconLabel extends Component<Props> {
  render () {
    const { labelList, customerClass, nowrap } = this.props
    return (
        <div className={nowrap ? styles.icon__nowrap : styles.icon__ul}>
           { labelList && labelList.length && (
              labelList.map((infoitem:any, index:number) => {
                  return (
                      <div className={nowrap ? styles.icon__li_nowrap : styles.icon__li + ' ' + customerClass} key={index}>
                          <span className={styles.icon__text}>{infoitem.name ? infoitem.name : infoitem}</span>
                      </div>
                  )
              })
            )}
            { nowrap && <div className={styles.clear__float}></div>}
        </div>
    )
  }
}

export default IconLabel
