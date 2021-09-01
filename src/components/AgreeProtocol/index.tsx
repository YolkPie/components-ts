import React, { Component } from 'react'
import css from './index.css'


interface AgreeProtocolState {
	isSelected:boolean
}

export default class AgreeProtocol extends Component<{}, AgreeProtocolState> {
	constructor(props: any) {
		super(props);
		this.state={
			isSelected:false
		}
	}

	handleSelected(){
		this.setState({
			isSelected:!this.state.isSelected
		})
	}

	render() {
		const {isSelected} = this.state
		return (
			<div className={css.container}>
				<div className={css.container__wrap} onClick={this.handleSelected.bind(this)}>
          <div className={[css.container__sub__icon, isSelected?css.selected:''].join(" ")}></div>
          <div className={css.container__sub__tip}>请认真阅读上述协议内容，阅读完成后，勾选同意协议进行下一步操作哦~</div>
        </div>
			</div>
		);
	}
}