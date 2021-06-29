import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'

interface TabItem {
  name: string,
  value: string | number,
}

interface IProps {
  customClass?: string,
  tabs: TabItem[],
  initTab?: string | number
  isFixed?: boolean,
  onTabChange?: (value: string | number) => void
}

interface IState {
  currentTabIndex: number,
  tabBarLeft: number,
}
let tabBar = React.createRef<HTMLElement>()
  let tabWrap = React.createRef<HTMLDivElement>()

class NavigationTab extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentTabIndex: -1,
      tabBarLeft: 0,
    }
  }

  // private tabBar = React.createRef<HTMLElement>()
  // private tabWrap = React.createRef<HTMLDivElement>()

  changeTab(value: string | number) {
    const {
      tabs
    } = this.props;
    tabs.forEach((tab: TabItem, index: number) => {
      if (tab.value === value) {
        this.setState({
          currentTabIndex: index
        })
      }
    })
  }

  _updateTabBarPositon() {
    const tabWrapNew = tabWrap.current
    const tabBarNew = tabBar.current
    if (tabWrapNew && tabBarNew) {
      const {
        currentTabIndex
      } = this.state
      const currentTab = tabWrapNew.querySelectorAll('div')[currentTabIndex]
      const {
        left: wrapLeft
      } = tabWrapNew.getBoundingClientRect()
      const {
        width: tabWidth,
        left: tabLeft
      } = currentTab.getBoundingClientRect()
      const {
        width: tabBarWidth
      } = tabBarNew.getBoundingClientRect()
      this.setState({
        tabBarLeft: tabLeft + (tabWidth - tabBarWidth) / 2 - wrapLeft
      })
    }
  }

  _changeCurrentTabByIndex(index: number) {
    const {
      tabs,
      onTabChange,
    } = this.props
    this.setState({
      currentTabIndex: index
    })
    if (onTabChange) {
      onTabChange(tabs[index].value)
    }
  }

  componentDidMount() {
    this.setState({
      currentTabIndex: 0
    })
  }

  componentDidUpdate(prevProps: IProps, prevstate: IState) {
    // currentTabIndex变更时修改tabBar位置
    const {
      currentTabIndex,
    } = this.state
    if (prevstate.currentTabIndex !== currentTabIndex) {
      this._updateTabBarPositon()
    }
  }

  render () {
    const {
      customClass,
      tabs,
      isFixed,
    } =  this.props
    const {
      currentTabIndex,
      tabBarLeft,
    } = this.state

    return (
      <>
        {
          tabs && tabs.length ? (
            <div
              className={classnames(styles.navigationTab, customClass, isFixed ? styles.isFixed : null)}
            >
              <div className={styles.navigationTabWrap} ref={tabWrap}>
                {
                  tabs.map((tab: TabItem, index: number) => {
                    return (
                      <div
                        className={classnames(styles.navigationTabItem, index === currentTabIndex ? styles.isCurrent : null)}
                        key={index}
                        onClick={() => {
                          this._changeCurrentTabByIndex(index)
                        }}
                      >
                        {tab.name}
                      </div>
                    )
                  })
                }
                <b className={styles.navigationTabBar} ref={tabBar} style={{
                  left: tabBarLeft
                }}></b>
              </div>
            </div>
          ) : ''
        }
      </>
    )
  }
}

export default NavigationTab
