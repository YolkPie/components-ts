import React, { Component } from 'react'
import css from './index.css'

export default class CircleProcess extends Component<{}> {
	
	render() {
		return (
			<div className={css.circle_process}>
				<div className={[css.wrapper,css.right].join(" ")}>
					<div className={[css.circle,css.rightcircle].join(" ")} id="rightcircle"></div>
				</div>
				<div className={[css.wrapper,css.left].join(" ")}>
					<div className={[css.circle,css.leftcircle].join(" ")} id="leftcircle"></div>
				</div>
			</div>
		);
	}
}