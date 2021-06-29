import React, { Component } from 'react';
import css from './index.css'

interface ProgressProp {
    [propName: string]: any
}

interface ProgressState {
    percent: any
}

export default class Progress extends Component<ProgressProp, ProgressState> {
    constructor(props:any) {
        super(props)
        this.state = {
            percent: 10
        };
    }

    increase() {
        const {percent} = this.state
        const targetPercent:any = percent >= 90 ? 100 : percent + 10;
        const speed:any = (targetPercent - percent) / 400;
        let start:any = null;
        const animate = (timestamp:any) => {
            if (!start) start = timestamp;
            const progress:any = timestamp - start;
            const currentProgress = Math.min(parseInt(speed * progress + percent), targetPercent);
            this.setState({
                percent: currentProgress
            });
            if (currentProgress < targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
    }

    decrease() {
        const {percent} = this.state
        const targetPercent:any = percent < 10 ? 0 : percent - 10;
        const speed:any = (percent - targetPercent) / 400;
        let start:any = null;
        const animate = (timestamp:any) => {
            if (!start) start = timestamp;
            const progress:any = timestamp - start;
            const currentProgress:any = Math.max(parseInt((percent - speed * progress).toString()), targetPercent);
            this.setState({
                    percent: currentProgress
                });
            if (currentProgress > targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
    }

    render() {
        const { percent } = this.state;

        return (
            <div className={css.container}>
                <div>
                    <div className={css.container__wrapper}>
                        <div className={css.container__wrapper__inner} style = {{width: `${percent}%`}}></div>
                    </div>
                    <div className={css.container__info}>{percent}%</div>
                </div>
                <div className={css.container__btns}>
                    <div onClick={this.decrease} className={css.container__btns__subtract}>-</div>
                    <div onClick={this.increase} className={css.container__btns__add}>+</div>
                </div>
            </div>
        );
    }
}