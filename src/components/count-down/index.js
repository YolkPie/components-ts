import React from "react";
import { px2vw } from "../../utils";
import "./index.css";

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10000
    };
  }

  static defaultProps = {};

  timerId = null;

  start = 0;

  end = 0;

  startSeconds = 0;

  componentWillReceiveProps(nextProps) {
    if (nextProps.seconds === this.props.seconds) {
      return;
    }
    clearInterval(this.timerId);
    this.setState(
      {
        seconds: nextProps.seconds
      },
      () => {
        this.startCountDown();
      }
    );
  }

  componentDidMount() {
    this.setState(
      {
        seconds: this.props.seconds
      },
      () => {
        this.startCountDown();
      }
    );
    document.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this),
      false
    );
  }

  startCountDown() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      const _seconds = this.state.seconds;
      if (_seconds === 0) {
        clearInterval(this.timerId);
        if (
          this.props.onFinishedCount &&
          typeof this.props.onFinishedCount === "function"
        ) {
          this.props.onFinishedCount();
        }
      } else {
        this.setState(
          {
            seconds: _seconds - 1
          },
          () => {
            if (this.state.seconds < 1 && this.props.triggerStart) {
              this.props.timeEnd();
            }
          }
        );
      }
    }, 1000);
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.startSeconds = this.state.seconds;
      this.start = parseInt(new Date().getTime() / 1000);
    } else {
      this.end = parseInt(new Date().getTime() / 1000);
      if (
        this.end - this.start - (this.startSeconds - this.state.seconds) >
        5
      ) {
        this.setState({
          seconds: this.state.seconds - (this.end - this.start)
        });
      }
    }
  }

  transformTime(seconds) {
    const day = Math.floor(seconds / 3600 / 24);
    const hour = Math.floor((seconds - day * 24 * 3600) / 3600);
    const minute = Math.floor((seconds - day * 24 * 3600 - hour * 3600) / 60);
    const second = Math.floor(
      seconds - day * 24 * 3600 - hour * 3600 - minute * 60
    );

    return {
      day: day < 10 ? `0${day}` : day,
      hour: hour < 10 ? `0${hour}` : hour,
      minute: minute < 10 ? `0${minute}` : minute,
      second: second < 10 ? `0${second}` : second
    };
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this),
      false
    );
  }

  render() {
    const time = this.transformTime(this.state.seconds);
    const {
      background,
      backgroundSize,
      color,
      fontSize,
      width,
      height,
      splitColor,
      type,
      splitSpace,
      borderRadius,
      splitFontWeight,
      splitDayColor,
      splitFontSize,
      splitHeight,
      isShowHour
      // handleSecond
    } = this.props;
    const style = {
      background,
      backgroundSize,
      color,
      fontSize: px2vw(fontSize),
      width: px2vw(width),
      height: px2vw(height),
      lineHeight: px2vw(height),
      borderRadius: borderRadius
        ? `${px2vw(borderRadius[0])} ${px2vw(borderRadius[1])} ${px2vw(
            borderRadius[2]
          )} ${px2vw(borderRadius[3])}`
        : 0
    };
    const splitStyle = {
      color: splitColor,
      fontSize: splitFontSize || px2vw(height),
      marginLeft: px2vw(splitSpace),
      marginRight: px2vw(splitSpace),
      fontWeight: splitFontWeight,
      height: splitHeight || "auto"
    };
    const splitDayStyle = {
      color: splitDayColor,
      fontSize: px2vw(fontSize),
      marginLeft: px2vw(splitSpace),
      marginRight: px2vw(splitSpace),
      fontWeight: splitFontWeight
    };
    const defaultStyle = {
      color,
      fontSize: px2vw(fontSize)
    };

    return (
      <div style={{ display: type === "default" ? "inline-block" : "block" }}>
        {type === "default" ? (
          <div style={defaultStyle}>
            {time.day > 0 && <span>{time.day}天</span>}
            {time.hour}:{time.minute}:{time.second}
          </div>
        ) : type === "tip" ? (
          <div styleName="count-down-tip">
            {time.day > 0 && (
              <span>
                <span styleName="dark">{time.day}</span>天
              </span>
            )}
            <span styleName="dark">{time.hour}</span>:
            <span styleName="dark">{time.minute}</span>:
            <span styleName="dark">{time.second}</span>
          </div>
        ) : (
          <div styleName="count-down">
            {time.day > 0 && (
              <div styleName="value" style={style}>
                {time.day}
              </div>
            )}
            {time.day > 0 && (
              <div styleName="split" style={splitDayStyle}>
                天
              </div>
            )}
            {isShowHour !== false && (
              <div styleName="value" style={style}>
                {time.hour}
              </div>
            )}
            {isShowHour !== false && (
              <div styleName="split" style={splitStyle}>
                :
              </div>
            )}
            <div styleName="value" style={style}>
              {time.minute}
            </div>
            <div styleName="split" style={splitStyle}>
              :
            </div>
            <div styleName="value" style={style}>
              {time.second}
            </div>
          </div>
        )}
      </div>
    );
  }
}
