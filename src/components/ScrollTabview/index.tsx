import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'
import NavigationBar from '../NavigationTab/index.tsx'
import NavigationTab from '../NavigationTab/index'

interface ModuleItem {
  name: string,
  value: string | number
}

interface IProps {
  children?: any,
  customClass?: string,
}

interface IState {
  modules: ModuleItem[],
  currentTab: string | number,
}

class ScrollTabview extends Component<IProps, IState> {

  state: IState = {
    modules: [],
    currentTab: ''
  }

  private moduleWrap = React.createRef<HTMLDivElement>()
  private navigationBar = React.createRef<NavigationTab>()

  _onTabChange(value: string | number) {
    if (!this.moduleWrap) return
    const scrollTop = this.moduleWrap.current.scrollTop
    const modules = this.moduleWrap.current.querySelectorAll('[data-value]')
    const {
      top: wrapTop
    } = this.moduleWrap.current.getBoundingClientRect()
    for (let i = 0; i< modules.length; i++) {
      const module = modules[i]
      if (value === module.getAttribute('data-value')) {
        const {
          y
        } = module.getBoundingClientRect()
        this.moduleWrap.current.scrollTop = y + scrollTop - wrapTop
        return
      }
    }
  }

  _onScroll(e: any) {
    const modules = e.currentTarget.querySelectorAll('[data-value]')
    for (let i = 0; i< modules.length; i++) {
      const module = modules[i]
      const {
        top,
        height
      } = module.getBoundingClientRect()
      const {
        top: wrapTop
      } = this.moduleWrap.current.getBoundingClientRect()

      if (top - wrapTop <= 0 &&  top - wrapTop + height > 0) {
        this.setState({
          currentTab: module.getAttribute('data-value')
        })
        return
      }
    }
  }

  _getTabInfoByNode(child: any) {
    const tabValue = child && child.props && child.props.tabValue ? child.props.tabValue : null
    const tabName = child && child.props && child.props.tabName ? child.props.tabName : null
    if (tabValue && tabName) {
      return {
        name: tabName,
        value: tabValue,
      }
    }
    return null
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    const {
      currentTab
    } = this.state
    if (currentTab !== prevState.currentTab) {
      if (this.navigationBar.current) {
        this.navigationBar.current.changeTab(currentTab)
      }
    }
  }

  componentDidMount() {
    const {
      children
    } = this.props
    let moduleItems: ModuleItem[] = []
    if (children) {
      if (children instanceof Array) {
        children.forEach(child => {
          const item = this._getTabInfoByNode(child)
          if (item) {
            moduleItems.push(item)
          }
        })
      } else {
        const item = this._getTabInfoByNode(children)
        if (item) {
          moduleItems.push(item)
        }
      }
    }
    this.setState({
      modules: moduleItems
    })
  }

  render () {
    const {
      children,
      customClass
    } = this.props
    const {
      modules,
    } = this.state
    return (
      <div className={classnames(styles.scrollTabview, customClass ? customClass : null)}>
        <div className={styles.scrollTabviewTabs}>
          <NavigationBar ref={this.navigationBar} tabs={modules} onTabChange={(value: string | number) => this._onTabChange(value)}/>
        </div>
        <div className={styles.scrollTabviewModules} ref={this.moduleWrap} onScroll={(e) => this._onScroll(e)}>
          {
            (children instanceof Array) ? (
              <>
                {
                  children.map((child: any, index: any) => {
                    const tabValue = child && child.props && child.props.tabValue ? child.props.tabValue : null
                    const tabName = child && child.props && child.props.tabName ? child.props.tabName : null
                    return tabValue && tabName ? (
                      <div
                        key={index}
                        data-value={tabValue}
                      >
                        {child}
                      </div>
                    ) : null
                  })
              }
              </>
            ) : (
              <div>
                {children}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default ScrollTabview
