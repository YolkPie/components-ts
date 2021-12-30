import React, {
    Component
} from 'react'
import styles from './index.scss'

  export interface sourtListItem {
    id: number,
    sourtName: string,
    name: string,
  }

interface Props {
    sortField: number,
    sortName: NamedCurve,
    sourtList:sourtListItem[],
    chooseSourtList: (id: number, name: string) => void,
}
interface States {

}
class SourtBox extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
           
        }
        
      }

    sourtListClick(value: number, name: string) {
        this.props.chooseSourtList(value, name)
    }

    sourtBoxClick(e: any) {
        if(e.target && e.target.id === 'outBox_sourt'){
            this.props.chooseSourtList(this.props.sortField,this.props.sortName)
        }
      }

    render() {
        const {
            sourtList,
            sortField
        } = this.props
        return (
                <div className={styles.index__sourtbox} id="outBox_sourt" onClick={this.sourtBoxClick}>
                    <ul className={styles.sourt__ul}>
                        {sourtList.map((item: sourtListItem, index: number) => {
                                return (
                                    <li className={sortField===item.id ? styles.sourt_active:styles.sourt__li } key={index+'_'+item.id} onClick = {()=>this.sourtListClick(item.id,item.sourtName)}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        )
    }
}

export default SourtBox
