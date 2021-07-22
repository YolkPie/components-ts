import React, { Component } from "react";

interface CssStyleData {
    imgContainer: object;
    mouseBlock: object;
    maskBlock: object;
    magnifierContainer: object;
    imgStyle: object;
    imgStyle2: object;
}

interface ISProps {
    minImg: string;
    maxImg: string;
}

interface ISParams {
    scale: number;
    width: string;
    height: string
}
interface IState {
    params: ISParams;
    minImg: string;
    maxImg: string;
    magnifierOff: boolean;
    imgLoad: boolean;
    cssStyle: CssStyleData;
}

class ImageMagnifier extends Component<ISProps, IState> {
    constructor(props: ISProps) {
        super(props);
        this.state = {
            /**
             * 图片放大镜参数列表
             * 组件宽高必须大于鼠标悬停小方块 ！！！
             */
            params: {
                // 放大倍数
                scale: 2,
                // 组件宽
                width: "450",
                // 组件高
                height: "450"
            },
            // 缩略图
            minImg: "",
            // 大图
            maxImg: "",

            // 开关
            magnifierOff: false,
            // 图片加载情况
            imgLoad: false,
            /**
             * 样式
             */
            cssStyle: {
                // 图片容器样式
                imgContainer: {
                    width: "450px",
                    height: "450px",
                    border: "1px solid #ccc",
                    cursor: "move",
                    position: "relative"
                },
                // 鼠标悬停小方块样式
                mouseBlock: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "300px",
                    height: "300px",
                    zIndex: 99,
                    border: '1px solid #aaa',
                    background: '#fede4f 50% top no-repeat',
                    opacity: '0.5',
                    cursor: 'move'
                },
                // 鼠标悬停遮罩层样式
                maskBlock: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0)",
                    zIndex: 100
                },

                //  放大镜容器样式
                magnifierContainer: {
                    position: "absolute",
                    left: "450px",
                    top: "0",
                    width: "550px",
                    height: "550px",
                    border: "1px solid #ccc",
                    overflow: "hidden",
                    zIndex: 98
                },
                // 图片样式
                imgStyle: {
                    width: "100%",
                    height: "100%"
                },
                // 图片放大样式
                // 此处图片宽高不能设置为百分比，在scale的作用下，放大的只是图片初始的宽高 ！！！
                imgStyle2: {
                    width: "450px",
                    height: "450px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "scale(4)",
                    transformOrigin: "top left"
                }
            }
        };
        this.initParam = this.initParam.bind(this)
        this.calculationBlock = this.calculationBlock.bind(this)
        this.updataImg = this.updataImg.bind(this)
        this.handleImageLoaded = this.handleImageLoaded.bind(this)
        this.handleImageErrored = this.handleImageErrored.bind(this)

    }

    /**
     * 生命周期函数
     */
    // 组件初始化
    componentWillMount() {
        console.log(this, '--===')
        this.initParam();
        this.updataImg(this.props);
    }

    // props 变化时更新
    componentWillReceiveProps(nextProps: ISProps) {
        this.updataImg(nextProps);
    }

    /**
     * 方法
     */
    // 鼠标移入
    mouseEnter() {
        this.setState({
            magnifierOff: true
        });
    };
    // 鼠标移除
    mouseLeave() {
        this.setState({
            magnifierOff: false
        });
    };
    // 鼠标移动
    mouseMove(event: React.MouseEvent<HTMLImageElement>) {
        let e = event.nativeEvent;
        this.calculationBlock(e.offsetX, e.offsetY);
    };

    // 计算相关参数
    calculationBlock(offsetX: number, offsetY: number) {
        let cssStyle = JSON.parse(JSON.stringify(this.state.cssStyle));
        /* 小方块位置 */
        // 防止鼠标移动过快导致计算失误，只要小于或者大于对应值，直接设置偏移量等于最小值或者最大值
        if (offsetX < 150) {
            offsetX = 150;
        }
        if (offsetX > 300) {
            offsetX = 300;
        }
        if (offsetY < 150) {
            offsetY = 150;
        }
        if (offsetY > 300) {
            offsetY = 300;
        }
        cssStyle.mouseBlock.left = parseFloat((offsetX - 150) + '') + "px";
        cssStyle.mouseBlock.top = parseFloat((offsetY - 150) + '') + "px";

        /* 计算图片放大位置 */
        cssStyle.imgStyle2.left = parseFloat((-(offsetX - 150) * this.state.params.scale) + '') + "px";
        cssStyle.imgStyle2.top = parseFloat((-(offsetY - 150) * this.state.params.scale) + '') + "px";

        this.setState({
            cssStyle: cssStyle
        });
    }

    // 初始化静态参数
    initParam() {
        let cssStyle = JSON.parse(JSON.stringify(this.state.cssStyle));
        let params = JSON.parse(JSON.stringify(this.state.params));

        cssStyle.imgContainer.width = params.width + "px";
        cssStyle.imgContainer.height = params.height + "px";
        // cssStyle.magnifierContainer.width = params.width + "px";
        // cssStyle.magnifierContainer.height = params.height + "px";
        cssStyle.magnifierContainer.left = params.width + "px";
        cssStyle.imgStyle2.width = params.width + "px";
        cssStyle.imgStyle2.height = params.height + "px";
        cssStyle.imgStyle2.transform = "scale(" + params.scale + ")";

        this.setState({
            cssStyle: cssStyle
        });
    }

    // 更新图片
    updataImg(props: ISProps) {
        this.setState({
            minImg: props.minImg,
            maxImg: props.maxImg
        });
    }

    // 图片加载情况
    handleImageLoaded() {
        this.setState({ imgLoad: true });
    }

    // 图片加载中
    handleImageErrored() {
        this.setState({ imgLoad: false });
    }

    render() {
        const { cssStyle, magnifierOff, minImg, maxImg, imgLoad } = this.state;
        return (
            <div>
                <div style={cssStyle.imgContainer}>
                    <img style={cssStyle.imgStyle} src={minImg} alt="" />
                    <div
                        style={cssStyle.maskBlock}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseLeave={this.mouseLeave.bind(this)}
                        onMouseMove={this.mouseMove.bind(this)}
                    />
                    {magnifierOff && <div style={cssStyle.mouseBlock} />}
                </div>
                {magnifierOff && (
                    <div style={cssStyle.magnifierContainer}>
                        <img
                            style={cssStyle.imgStyle2}
                            src={maxImg}
                            onLoad={this.handleImageLoaded.bind(this)}
                            onError={this.handleImageErrored.bind(this)}
                            alt=""
                        />
                        {!imgLoad && "failed to load"}
                    </div>
                )}
            </div>
        );
    }
}

export default ImageMagnifier;
