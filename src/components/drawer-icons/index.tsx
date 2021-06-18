import React, { Component } from 'react'
import css from './index.css'

interface ProgressProp {
    [propName: string]: any
}

interface ProgressState {
    percent: number
}

export default class DrawerIcons extends Component<ProgressProp, ProgressState> {
    constructor(props: any) {
        super(props);
        this.state = {
            percent: 0
        };
    }

    show = () => {
        this.setState({
            percent: 100
        })
    }

    close = () => {
        this.setState({
            percent: 0
        })
    }

    render() {
        const { percent } = this.state
        const {gotoHome, gotoMy} = this.props
        return (
            <div className={css.container}>
                <div>
                    <div className={css.container__wrapper}>
                        <div 
                            className={css.container__wrapper__inner} 
                            style={{ width: `${percent}%` }} 
                        >
                            <div 
                                className={percent===0?css.container__wrapper__inner__icon__0:css.container__wrapper__inner__icon__close} 
                                onClick={percent===0?this.show:this.close}
                            ></div>
                            <React.Fragment>
                                <div 
                                    className={[css.container__wrapper__inner__icon,css.container__wrapper__inner__icon__1].join(' ')} 
                                    onClick={gotoHome}
                                ></div>
                                <div className={[css.container__wrapper__inner__icon,css.container__wrapper__inner__icon__2].join(' ')} 
                                onClick={gotoMy}
                                ></div>
                                <div className={css.container__wrapper__inner__icon}></div>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}