import React from "react";
import { px2vw } from "../../utils";
import "./index.css";

class Swiper extends React.Component {
  timer = null;

  timestamp = new Date().valueOf();

  wrap = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex
    };
  }

  componentDidMount() {
    const { speed, activeIndex } = this.props;
    this.setState({
      activeIndex: activeIndex || 0
    });
    this.$wrap = this.wrap.current;
    this.$wrap.style.transitionDuration = `${speed}s`;
    this.autoPlay();
    this.touchEvent();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setActive(activeIndex) {
    this.setState(
      {
        activeIndex
      },
      () => {
        this.autoPlay();
      }
    );
  }

  touchEvent = () => {
    const node = document.getElementById(`swiper-element-${this.timestamp}`);
    node.addEventListener(
      "touchstart",
      ev => {
        this.touchStart(ev);
      },
      false
    );

    node.addEventListener(
      "touchmove",
      ev => {
        this.touchMove(ev);
      },
      false
    );

    node.addEventListener(
      "touchend",
      ev => {
        this.touchEnd(ev);
      },
      false
    );
  };

  touchStart(ev) {
    if (this.moving) return;
    this.startX = ev.changedTouches[0].clientX;
    this.startY = ev.changedTouches[0].clientY;
    this.moving = false;
    this.left = this.$wrap.style.left;
  }

  touchMove(ev) {
    if (this.moving) return;
    this.moveX = ev.changedTouches[0].clientX;
    this.moveY = ev.changedTouches[0].clientY;
    const diffX = this.moveX - this.startX;
    const diffY = this.moveY - this.startY;
    this.$wrap.style.left = this.left + px2vw(diffX);
    if (Math.abs(diffX) > Math.abs(diffY)) {
      this.moving = true;
      ev.preventDefault();
    } else {
      this.moving = false;
    }
  }

  touchEnd(ev) {
    const { onClick, loop, isHorizontal } = this.props;
    const { activeIndex } = this.state;
    this.moveX = ev.changedTouches[0].clientX;
    this.moveY = ev.changedTouches[0].clientY;
    const diffX = this.moveX - this.startX;
    const diffY = this.moveY - this.startY;
    const moveDistance = isHorizontal ? diffX : diffY;
    const direction = isHorizontal
      ? Math.abs(diffX) > Math.abs(diffY)
      : Math.abs(diffY) > Math.abs(diffX);

    if (!this.moving && !!onClick && Math.abs(moveDistance) < 5) {
      onClick(activeIndex - 1);
    }

    if (Math.abs(moveDistance) > 10 && direction) {
      if (activeIndex === 0 && moveDistance > 0 && !loop) {
        return;
      }
      this.animate(moveDistance > 0 ? -1 : 1);
      this.moving = true;
    } else {
      this.moving = false;
      this.autoPlay();
    }

    this.moving = false;
  }

  autoPlay() {
    const { duration, auto } = this.props;
    if (!auto) return;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.animate(1);
    }, duration);
  }

  animate(step) {
    const {
      isHorizontal,
      itemWidth,
      marginLeft,
      children,
      speed,
      loop
    } = this.props;
    const max = children.length || 1;
    let { activeIndex } = this.state;
    activeIndex += step;
    if (!loop && (activeIndex >= max || activeIndex < 0)) return;
    if (activeIndex > max) {
      this.$wrap.style.transitionDuration = "";
      this.$wrap.style[isHorizontal ? "left" : "top"] = 0;
      setTimeout(() => {
        this.$wrap.style.transitionDuration = `${speed}s`;
        activeIndex = 1;
        this.setActive(activeIndex);
      }, 30);
      return;
    }
    if (activeIndex === 0 && loop) {
      this.$wrap.style.transitionDuration = "";
      this.$wrap.style[isHorizontal ? "left" : "top"] = `${(max - 1) *
        -1 *
        (itemWidth + (marginLeft || 0))}px`;
      setTimeout(() => {
        this.$wrap.style.transitionDuration = `${speed}s`;
        activeIndex = max;
        this.setActive(activeIndex);
      }, 30);
      return;
    }
    this.setActive(activeIndex);
  }

  handleChildren() {
    const { children, loop } = this.props;
    if (loop) {
      const max = children.length || 1;
      return [children[max - 1], ...children, children[0]];
    }
    return [...children];
  }

  render() {
    const {
      dots,
      isHorizontal,
      itemHeight,
      itemWidth,
      style,
      leftType,
      marginLeft,
      type,
      children,
      loop
    } = this.props;
    const { activeIndex } = this.state;
    const max = children.length;
    const childLength = loop ? max + 2 : max;
    const width = isHorizontal
      ? (itemWidth + (marginLeft || 0)) * childLength
      : itemWidth;
    const left = leftType
      ? -(itemWidth + (marginLeft || 0)) * activeIndex
      : -itemWidth * activeIndex;

    const styleLeft = left < (width - 750) * -1 ? (width - 750) * -1 : left;
    return (
      <div
        id={`swiper-element-${this.timestamp}`}
        styleName="swiper no-scroll-bar"
        style={style}
      >
        <div
          styleName="swiper-wrap"
          ref={this.wrap}
          style={{
            marginLeft: `${
              type === 3 ? px2vw(375 - itemWidth / 2 - marginLeft) : 0
            }`,
            width: px2vw(width),
            height: isHorizontal
              ? px2vw(itemHeight)
              : px2vw(itemHeight * childLength),
            left: isHorizontal ? px2vw(styleLeft) : 0,
            top: isHorizontal ? 0 : px2vw(-itemHeight * activeIndex),
            flexDirection: isHorizontal ? "row" : "column"
          }}
        >
          <>
            {React.Children.map(this.handleChildren(), (child, i) => {
              if (!child) {
                return null;
              }
              return React.cloneElement(child, { key: String(i) });
            })}
          </>
        </div>
        {dots && dots(activeIndex - 1)}
      </div>
    );
  }
}

export default Swiper;
