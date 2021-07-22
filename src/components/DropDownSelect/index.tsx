import React, { Component } from "react";
import css from './index.css'

interface DropDownSelectProps {
  data: []
}

interface DropDownSelectState {
  isShowSelect: boolean,
  selectedName: string
}

class DropDownSelect extends Component<DropDownSelectProps, DropDownSelectState> {

  constructor(props: any) {
    super(props)
    this.state = {
      isShowSelect: false,
      selectedName: '全部'
    }
  }

  handleShowSelect() {
    this.setState({
      isShowSelect: !this.state.isShowSelect
    })
  }

  handleSelected(selectedName: string)  {
    this.setState({
      selectedName,
      isShowSelect: false
    })
  }

  render() {
    const { isShowSelect, selectedName } = this.state
    const { data } = this.props
    return (
      <div className={css.container}>
        <div
          className={css.container__selected}
          onClick={this.handleShowSelect.bind(this)}
          // onClick={() => {
          //   this.handleShowSelect()
          // }}
        >
          <em>{selectedName}</em>
          <i className={isShowSelect ? css.container__up__icon : ''}></i>
        </div>

        {isShowSelect &&
          <div className={css.container__select__wraper}>
            {data.map((val, i) => {
              return (
                <div
                  key={i.toString()}
                  className={css.container__select}
                  onClick={this.handleSelected.bind(this, val)}
                  // onClick={() => {
                  //   this.handleSelected(val)
                  // }}
                >{val}</div>
              )
            })}
          </div>
        }
      </div>
    )
  }
}

export default DropDownSelect;
