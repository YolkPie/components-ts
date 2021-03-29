import React, {
  Component
} from 'react'
// import './index.scss'
import styles from './index.scss'

interface Props {
  lableList: any[],
  classMySelf: string,
  nowrap: boolean
}

class IconLable extends Component<Props> {
  render () {
    const { lableList, classMySelf, nowrap } = this.props
    return (
        <div className={nowrap ? styles.icon__nowrap : styles.icon__ul}>
           { lableList && lableList.length && (
              lableList.map((infoitem:any, index:number) => {
                  return (
                      <div className={nowrap ? styles.icon__li_nowrap : styles.icon__li + ' ' + classMySelf} key={index}>
                          <span className={styles.icon__text}>{infoitem.name ? infoitem.name : infoitem}</span>
                      </div>
                  )
              })
            )}
            { nowrap && <div className={styles.icon__clear}></div>}
        </div>
    )
  }
}

export default IconLable
