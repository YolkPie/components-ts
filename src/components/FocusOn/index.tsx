import React, { Component } from 'react'
import css from './index.css'


interface FocusOnState {
	isSelected:boolean
}

export default class FocusOn extends Component<{}, FocusOnState> {
	constructor(props: any) {
		super(props);
		this.state={
			isSelected:false
		}
	}

	handleSelected(){
		console.log(111)
		this.setState({
			isSelected:!this.state.isSelected
		})
	}

	render() {
		const {isSelected} = this.state
		return (
			<div className={css.container}>
				<div className={css.focuson__wrap} onClick={this.handleSelected.bind(this)}>
          <div className={[css.focuson__wrap__icon, isSelected?css.selected:''].join(" ")}></div>
          <div className={css.focuson__wrap__txt}>{isSelected?'已关注':'关注'}</div>
        </div>
			</div>
		);
	}
}