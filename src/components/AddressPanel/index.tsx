import React, {
  Component
} from 'react'
import styles from './index.scss'
const datal = {
  "A": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 14,
      "name": "安徽",
      "overseas": 0
    }
  ],
  "B": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 1,
      "name": "北京",
      "overseas": 0
    }
  ],
  "C": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 4,
      "name": "重庆",
      "overseas": 0
    }
  ],
  "D": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 84,
      "name": "钓鱼岛",
      "overseas": 0
    }
  ],
  "F": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 16,
      "name": "福建",
      "overseas": 0
    }
  ],
  "G": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 19,
      "name": "广东",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 20,
      "name": "广西",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 24,
      "name": "贵州",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 28,
      "name": "甘肃",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 52993,
      "name": "港澳",
      "overseas": 0
    }
  ],
  "H": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 5,
      "name": "河北",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 7,
      "name": "河南",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 10,
      "name": "黑龙江",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 17,
      "name": "湖北",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 18,
      "name": "湖南",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 23,
      "name": "海南",
      "overseas": 0
    }
  ],
  "J": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 9,
      "name": "吉林",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 12,
      "name": "江苏",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 21,
      "name": "江西",
      "overseas": 0
    }
  ],
  "L": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 8,
      "name": "辽宁",
      "overseas": 0
    }
  ],
  "N": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 11,
      "name": "内蒙古",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 30,
      "name": "宁夏",
      "overseas": 0
    }
  ],
  "Q": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 29,
      "name": "青海",
      "overseas": 0
    }
  ],
  "S": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 2,
      "name": "上海",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 6,
      "name": "山西",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 13,
      "name": "山东",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 22,
      "name": "四川",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 27,
      "name": "陕西",
      "overseas": 0
    }
  ],
  "T": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 3,
      "name": "天津",
      "overseas": 0
    },
    {
      "areaCode": "886",
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 32,
      "name": "台湾",
      "nameCode": "TW",
      "overseas": 0
    }
  ],
  "X": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 26,
      "name": "西藏",
      "overseas": 0
    },
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 31,
      "name": "新疆",
      "overseas": 0
    }
  ],
  "Y": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 25,
      "name": "云南",
      "overseas": 0
    }
  ],
  "Z": [
    {
      "cod": false,
      "externalTradeFlag": 0,
      "frequentFlag": 0,
      "id": 15,
      "name": "浙江",
      "overseas": 0
    }
  ]
}

const formatAddressTitle = (arrayNames:string[]) => {
  let levelLength = 3;//此处表示传入的地址级数，
  let titleArr = []
  for(let i=0; i<levelLength; i++){
     if(arrayNames[i]){
      titleArr.push(arrayNames[i])
     }else{
      titleArr.push('请选择')
      break;
     }
  }
  return titleArr
}

interface Props {
  ids: number[],
  names: string[],
  visible: boolean,
  onClose: (ids: number[], names: string[]) => void
}

interface States {
  selectedIds: number[],
  selectedNames: string[],
  addressList: any[],
  selectedTitles: string[],
  currentLevel: number,
  isFourLevel: boolean,
  ToastText: string
}

class AddressPanel extends Component<Props, States> {
  state: States = {
    selectedIds: [],
    selectedNames: [],
    addressList: [{}, {}, {}, {}],
    selectedTitles: ['请选择'],
    currentLevel: 0,
    isFourLevel: false,
    ToastText: ''
  }
  /**
   * 关闭
   */
  closeHandle = (): void => {
    const {
      onClose
    } = this.props
    const {
      selectedIds,
      selectedNames,
    } = this.state
    onClose(selectedIds, selectedNames)

  }

  /**
   * 获取地址信息
   */
  getAddressListByLevel = (id: number, level: number, loadNext: boolean): void => {

    // getAreaInfo(id, level).then((data: any) => {
      let data = datal
      if (data) {
        this.setState((state: any) => {
          state.addressList.splice(level - 1, 1, data)
          return {
            addressList: state.addressList,
            currentLevel: level - 1,
            isFourLevel: false
          }
        })
        if (level !== 1) {
          if (!loadNext) {
            // 清空下级title
            this.setState((state: any) => {
              return {
                selectedTitles: this.fillDefaultTitle(state.selectedTitles, level - 1)
              }
            })
          }
        }
        // 已有选中地址，获取下级地址数据
        const {
          selectedIds,
          selectedNames
        } = this.state
        if (selectedIds[level - 1] && loadNext) {
          this.setState({
            selectedIds,
            selectedNames
          })
          const maxLength = selectedIds[3] ? 4 : 3
          if (level < maxLength) {
            this.getAddressListByLevel(selectedIds[level - 1], level + 1, true)
          }
        }
      } else if (level === 4) {
        // 四级地址无数据，选中三级，关闭
        this.setState({
          isFourLevel: false
        })
        if (!loadNext) {
          this.closeHandle()
        }
      }
    // }).catch((err: any) => {
    //   if (level === 4) {
    //     // 四级地址无数据，选中三级，关闭
    //     this.setState({
    //       isFourLevel: false
    //     })
    //     if (!loadNext) {
    //       this.closeHandle()
    //     }
    //   }
    //   console.log(err)
    // })
  }

  /**
   * 选择地址
   */
  addressClickHandle = (id: number, name: string, level: number): void => {
    const {
      selectedIds,
      selectedNames,
      selectedTitles,
      isFourLevel
    } = this.state
    if (selectedIds[level] === id) {
      // 和已经选中地址相同
      return
    }
    selectedIds.splice(level, 1, id)
    selectedNames.splice(level, 1, name)
    selectedTitles.splice(level, 1, name)
    this.setState({
      selectedIds,
      selectedNames,
      selectedTitles
    })
    const lastLevel = isFourLevel? 3 : 2
    if (level < lastLevel) {
      this.getAddressListByLevel(id, level + 2, false)
    } else {
      this.closeHandle()
    }
  }

  /**
   * 为数组更新默认值
   * @param array 
   * @param startIndex 
   */
  fillDefaultTitle(array: any[], startIndex: number, defaultValue: any = ''): any[] {
    array[startIndex] = '请选择'
    for (let i = startIndex + 1; i < array.length; i++) {
      array[i] = defaultValue
    }
    return array
  }

  /**
   * 切换地址层级
   */
  addressLevelClickHandle = (currentLevel: number): void => {
    this.setState({
      currentLevel
    })
  }
  addressClickAll= (level: number): void => {
    const {
      selectedIds,
      selectedNames,
      selectedTitles,
    } = this.state
    if(level==0){
      this.setState({
        selectedIds:[],
        selectedNames:[],
        selectedTitles:['请选择']
      },()=>{this.closeHandle()})
    }else if(level==1){
      this.setState({
        selectedIds:[selectedIds[0],null,null],
        selectedNames:[selectedNames[0],'',''],
        selectedTitles:[selectedTitles[0],'请选择']
      },()=>{this.closeHandle()})
    }else{
      this.setState({
        selectedIds:[selectedIds[0],selectedIds[1],null],
        selectedNames:[selectedNames[0],selectedNames[1],''],
        selectedTitles:[selectedTitles[0],selectedTitles[1],'请选择']
      },()=>{this.closeHandle()})
    }
    
  }

  /**
   * 比较Id是否一致
   */
  compareIds = (currentIds: number[], nextIds: number[]): boolean => {
    if (currentIds.length !== nextIds.length) return false
    for (let i = 0; i < currentIds.length; i++) {
      if (currentIds[i] !== nextIds[i]) {
        return false
      }
    }
    return true
  }

  componentDidMount(){
    const {
      selectedIds: currentIds
    } = this.state
    const {ids, names, visible} = this.props
    // 显示浮层，初始化
    let titles = formatAddressTitle(names)
    this.setState({
      selectedIds: ids,
      selectedNames: names,
      selectedTitles: titles
    })
    if (ids && !this.compareIds(ids, currentIds)) {
      this.setState({
        selectedTitles: ids[0] ? titles : ['请选择']
      })
      const loadNext = typeof ids[0] !== 'undefined'
      this.getAddressListByLevel(0, 1, loadNext)
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps: any) {
    if (nextProps.visible && !this.props.visible) {
      const {
        selectedIds: currentIds
      } = this.state
      // 显示浮层，初始化
      let titles = formatAddressTitle(nextProps.names)
      this.setState({
        selectedIds: nextProps.ids,
        selectedNames: nextProps.names,
        selectedTitles: titles
      })
      if (nextProps.ids && !this.compareIds(nextProps.ids, currentIds)) {
        this.setState({
          selectedTitles: nextProps.ids[0] ? titles : ['请选择']
        })
        const loadNext = typeof nextProps.ids[0] !== 'undefined' && nextProps.ids[0]
        this.getAddressListByLevel(0, 1, loadNext)
      }
    }
  }
  navClick = (str:string) => {
    this.setState({
      ToastText: str
    })
    setTimeout(()=>{
      this.setState({
        ToastText: ''
      })
    },700)
    let scrollElement = document.getElementById('scrollmain');    // 对应id的滚动容器
    let anchorElement = document.getElementById(str);  // 需要定位看到的锚点元素
    if(scrollElement) {
        setTimeout(()=>{
            var topA = anchorElement.offsetTop
            scrollElement.scrollTop = topA-100
        },300) 
    }  
  }

  render () {
    const { visible } = this.props
    const {
      selectedTitles,
      currentLevel,
      addressList,
      selectedIds,
      ToastText
    } = this.state

    let AddressObj = addressList[currentLevel]

    return (
      <>
        {
          visible && (
            <div className={styles.addresspanel}>
              {ToastText && <div className={styles.addresspanel__toasttext}>{ToastText}</div>}
              <div className={styles.addresspanel__rightnav}>
                {Object.keys(AddressObj).map((obj, index) => (    
                    <div key={obj+index} className={styles.addresspanel__rightnav_item} onClick={() => this.navClick(obj)}>{obj}</div>                 
                ))}
              </div>
              <div className={styles.addresspanel__selects}>
                  {
                    selectedTitles.map((title: string, index: number) => {
                      return (
                        <span
                          className={ currentLevel === index ? styles.addresspanel__select_current : styles.addresspanel__select}
                          key={`title-${index}`}
                          onClick={() => this.addressLevelClickHandle(index)}
                        >
                          {title}
                        </span>
                      )
                    })
                  }
              </div>
              <div className={styles.addresspanel__main} id='scrollmain'>
                <div className={styles.addresspanel__items}>
                    <div className={selectedIds[currentLevel] ? styles.addresspanel__all : styles.addresspanel__all_selected}
                        onClick={() => this.addressClickAll(currentLevel)}>{currentLevel==0?'全国':'不限'}
                    </div>
                    {Object.keys(AddressObj).map((obj, index) => {
                      return (
                        <div key={obj} id={obj}>
                                <div className={styles.addresspanel__itemT}>{obj}</div>
                                {AddressObj[obj].map((address: any, indexx: number) => {
                                  return (
                                    <div
                                      className={selectedIds[currentLevel] === address.id ? styles.addresspanel__item_selected : styles.addresspanel__item}
                                      key={address.id}
                                      onClick={() => this.addressClickHandle(address.id, address.name, currentLevel)}
                                    >
                                      {address.name}
                                    </div>
                                  )
                                })}
                        </div>)
                    })}
                </div>
              </div>
            </div>
          )
        }
      </>
    )
  }
}

export default AddressPanel
