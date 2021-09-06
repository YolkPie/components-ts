import React, { Component } from 'react'
import css from './index.css'


interface CheckBoxState {
	data:any
}

export default class CheckBox extends Component<{}, CheckBoxState> {
	constructor(props: any) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					name: '选项1',
					selected: true
				},
				{
					id: 2,
					name: '选项2',
					selected: false
				},
				{
					id: 3,
					name: '选项3',
					selected: false
				},
			]
		}
	}

	handleSelected =(id:number) =>{
		const {data} = this.state
		for(let i=0;i<data.length;i++){
			if(data[i].id===id){
				data[i].selected = !data[i].selected
				break
			}
		}
		this.setState({
			data
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className={css.container}>
				{data && data.length > 0 && data.map((val:any,i:number) => {
					return (
						<div
							className={css.check__box}
							onClick={() => {
								this.handleSelected(val.id)
							}}
							key={i}
						>
							<div className={[css.check__box__icon, val.selected?css.selected:''].join(' ')}></div>
							<div className={css.check__box__txt}>{val.name}</div>
						</div>
					)
				})}
			</div>
		);
	}
}