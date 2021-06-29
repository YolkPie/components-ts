import React, { useEffect, useState } from "react";
import invalidName from './images/invalid-name.png'
import invalidNameR from './images/invalid-name_2.png'
import invalidNameHover from './images/hover.png'
import invalidNameHoverR from './images/group-11.png'

interface CssStyleData {
    dialogMainSlider: object;
    dialogArrowNext: object;
    dialogArrowNextDisable: object;
    dialogArrowNextHover: object;
    dialogArrowPrev: object;
    dialogArrowPrevDisable: object;
    dialogArrowPrevHover: object;
    dialogImglistCont: object;
    dialogImglistContLi: object;
    zoom: object;
    plus: object;
    minus: object;
    zoom_disabled: object;
}

interface ISSkuData {
    skuName: string;
    skuImg: string;
}
interface ISProps {
    imgListData: Array<ISSkuData>;
    changeSelectIndex?: Function;
    selectIndex?: number;
    boxWidth?: number;
}

const ImageViewWrap = (props: ISProps) => {
    const [dialogArrowPrevHover, SetDialogArrowPrevHover] = useState<boolean>(false)
    const [dialogArrowNextHover, SetDialogArrowNextHover] = useState<boolean>(false)

    // 放大
    const [canPlus, SetCanPlus] = useState<boolean>(true)
    // 缩小
    const [canMinus, SetCanMinus] = useState<boolean>(false)

    // 上一张
    const [canPrev, setCanPrev] = useState<boolean>(false)
    // 下一张
    const [canNext, setCanNext] = useState<boolean>(true)

    const [selectIndex, SetSelectIndex] = useState<number>(props.selectIndex || 0)
    const [listLength, SetListLength] = useState<number>(props.imgListData && props.imgListData.length || 0)
    const [boxWidth, SetBoxWidth] = useState<number>(props.boxWidth || 540)

    const [cssStyle, setCssStyle] = useState<CssStyleData>({
        dialogMainSlider: {
            width: '600px',
            height: '600px',
            float: 'left',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid #e3e5e9'
        },
        dialogArrowNext: {
            width: '30px',
            height: '50px',
            display: 'block',
            position: 'absolute',
            zIndex: '10',
            right: '0',
            top: '50%',
            marginTop: '-25px',
            background: `url(${invalidNameR}) no-repeat 0 0`,
            cursor: 'pointer'
        },
        dialogArrowNextDisable: {
            background: 'url(//misc.360buyimg.com/mall/realestate/item/1.0.0/widget/imglist/i/group-15.png) no-repeat 0 0',
        },
        dialogArrowNextHover: {
            background: `url(${invalidNameHoverR}) no-repeat 0 0`
        },
        dialogArrowPrev: {
            width: '30px',
            height: '50px',
            display: 'block',
            position: 'absolute',
            zIndex: '10',
            left: '0',
            top: '50%',
            marginTop: '-25px',
            background: `url(${invalidName}) no-repeat 0 0`,
            cursor: 'pointer'
        },
        dialogArrowPrevDisable: {
            background: 'url(//misc.360buyimg.com/mall/realestate/item/1.0.0/widget/imglist/i/group-13.png) no-repeat 0 0',
        },
        dialogArrowPrevHover: {
            background: `url(${invalidNameHover}) no-repeat 0 0`
        },
        dialogImglistCont: {
            width: '600px',
            height: '600px',
            border: '1px solid #e3e5e9',
            position: 'relative'
        },
        dialogImglistContLi: {
            width: `${boxWidth}px`,
            height: `${boxWidth}px`,
            margin: '30px',
            float: 'left',
            overflow: 'hidden',
            position: 'relative',
            display: 'list-item'
        },
        zoom: {
            width: '24px',
            position: 'absolute',
            top: '10px',
            left: '7px',
            textAlign: 'center',
            lineHeight: '24px',
            fontSize: '20px',
            color: '#333'
        },
        plus: {
            width: '24px',
            height: '24px',
            marginBottom: '2px',
            display: 'block',
            boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            transition: '.3s'
        },
        minus: {
            width: '24px',
            height: '24px',
            marginBottom: '2px',
            display: 'block',
            boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            transition: '.3s'
        },
        zoom_disabled: {
            backgroundColor: '#efefef',
            cursor: 'not-allowed',
            color: '#ddd'
        }

    })

    const [animateLeft, setAnimateLeft] = useState<object>({
        width: 'auto',
        left: '0',
        position: 'absolute',
        display: 'flex',
        transition: 'left .5s ease-out'
    })

    const [dialogImglistContImage, setDialogImglistContImage] = useState<object>({
        display: 'block',
        margin: '0 auto',
        position: 'absolute',
        top: '0',
        left: '0',
        cursor: 'pointer'
    })
    /** 记录鼠标是否按下 */
    const [mouseDowmFlag, setMouseDowmFlag] = useState(false);
    /** 记录鼠标按下的坐标 */
    const [mouseDowmPos, setMouseDowmPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        if (!props.imgListData) return
        if (props.imgListData) SetListLength(props.imgListData.length)
    }, [props.imgListData])

    useEffect(() => {
        if (typeof props.selectIndex === 'undefined') return
        let selectIndex = props.selectIndex
        SetSelectIndex(selectIndex)
        if (selectIndex <= 0) {
            SetSelectIndex(0)
            setCanPrev(false)
        } else if (selectIndex >= listLength - 1) {
            SetSelectIndex(listLength - 1)
            setCanNext(false)
        } else {
            setCanPrev(true)
            setCanNext(true)
        }

        setAnimateLeft({
            width: 'auto',
            left: `-${(selectIndex) * (540 + 60)}px`,
            position: 'absolute',
            display: 'flex',
            transition: 'left .5s ease-out'
        })
    }, [props.selectIndex])

    const clearChange = () => {
        setDialogImglistContImage({
            display: 'block',
            margin: '0 auto',
            position: 'absolute',
            top: '0',
            left: '0',
            cursor: 'pointer'
        })
        SetCanPlus(true)
        SetCanMinus(false)
    }

    const handleChangeNext = () => {
        if (!canNext) return
        SetBoxWidth(540)
        SetSelectIndex(selectIndex + 1)
        setAnimateLeft({
            width: 'auto',
            left: `-${(selectIndex + 1) * (540 + 60)}px`,
            position: 'absolute',
            display: 'flex',
            transition: 'left .5s ease-out'
        })
        if(props.changeSelectIndex) props.changeSelectIndex(selectIndex + 1)
        clearChange()
        if (selectIndex === listLength - 1) {
            setCanNext(false)
            return
        }
        setCanPrev(true)

        if (selectIndex + 1 === listLength - 1) {
            setCanNext(false)
        }
    }

    const handleChangePlus = () => {
        if (!canPrev) return
        SetBoxWidth(540)
        SetSelectIndex(selectIndex - 1)
        setAnimateLeft({
            width: 'auto',
            left: `-${(selectIndex - 1) * (540 + 60)}px`,
            position: 'absolute',
            display: 'flex',
            transition: 'left .5s ease-out'
        })
        if(props.changeSelectIndex) props.changeSelectIndex(selectIndex - 1)
        clearChange()
        if (selectIndex === 0) {
            setCanPrev(false)
            return
        }
        setCanNext(true)

        if (selectIndex - 1 === 0) {
            setCanPrev(false)
        }
    }

    const handlePlus = () => {
        if (!canPlus) return
        if (boxWidth === 540) {
            SetBoxWidth(810)
            SetCanPlus(true)
            SetCanMinus(true)
        }
        if (boxWidth === 810) {
            SetBoxWidth(1080)
            SetCanPlus(false)
            SetCanMinus(true)
        }
        setDialogImglistContImage({
            display: 'block',
            margin: '0 auto',
            position: 'absolute',
            top: '0',
            left: '0',
            cursor: 'move'
        })
    }

    const handleMinus = () => {
        if (!canMinus) return
        if (boxWidth === 1080) {
            SetBoxWidth(810)
            SetCanPlus(true)
            SetCanMinus(true)
        }
        if (boxWidth === 810) {
            SetBoxWidth(540)
            SetCanPlus(true)
            SetCanMinus(false)
            setDialogImglistContImage({
                display: 'block',
                margin: '0 auto',
                position: 'absolute',
                top: '0',
                left: '0',
                cursor: 'pointer'
            })
        }
    }

    const imgMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
        if (!canMinus) return
        const { clientX, clientY } = event;
        event.stopPropagation();
        event.preventDefault(); // 阻止浏览器默认行为，拖动会打开图片
        setMouseDowmFlag(true); // 控制只有在鼠标按下后才会执行mousemove
        setMouseDowmPos({
            x: clientX,
            y: clientY,
        });
    }
    const imgMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
        if (!canMinus || !mouseDowmFlag) return
        event.stopPropagation();
        event.preventDefault();
        const { clientX, clientY, target } = event;
        const diffX = clientX - mouseDowmPos.x;
        const diffY = clientY - mouseDowmPos.y;
        if (!mouseDowmFlag || (diffX === 0 && diffY === 0)) return;
        const { offsetLeft, offsetTop } = target as HTMLImageElement;
        let offsetX = diffX + offsetLeft
        let offsetY = diffY + offsetTop
        // let offsetX = parseInt(`${diffX + offsetLeft}`, 10);
        // let offsetY = parseInt(`${diffY + offsetTop}`, 10);

        if (offsetX > boxWidth - 540) offsetX = boxWidth - 540
        if (offsetY > boxWidth - 540) offsetY = boxWidth - 540
        if (offsetX < 540 - boxWidth) offsetX = 540 - boxWidth
        if (offsetY < 540 - boxWidth) offsetY = 540 - boxWidth

        setDialogImglistContImage({
            display: 'block',
            margin: '0 auto',
            position: 'absolute',
            top: offsetY,
            left: offsetX,
            cursor: 'pointer'
        })
    }
    const imgMouseUp = (event: React.MouseEvent<HTMLImageElement>) => {
        if (!canMinus) return
        event.stopPropagation();
        event.preventDefault();
        setMouseDowmFlag(false);
    }

    const imgListView = props.imgListData.map((item, index) => {
        return (
            <li style={cssStyle.dialogImglistContLi} key={index} >
                <img
                    onMouseDown={imgMouseDown}
                    onMouseMove={imgMouseMove}
                    onMouseUp={imgMouseUp}
                    style={dialogImglistContImage}
                    src={item.skuImg}
                    zoom-number="0"
                    width={boxWidth} />
            </li>
        )
    })

    return (
        <div style={cssStyle.dialogMainSlider} >
            <span
                onMouseEnter={() => {
                    if (!canPrev) return
                    SetDialogArrowPrevHover(true);
                }}
                onMouseLeave={() => {
                    if (!canPrev) return
                    SetDialogArrowPrevHover(false);
                }}
                onClick={handleChangePlus}
                style={{
                    ...cssStyle.dialogArrowPrev,
                    ...(dialogArrowPrevHover ? cssStyle.dialogArrowPrevHover : ''),
                    ...(canPrev ? '' : cssStyle.dialogArrowPrevDisable)
                }} />
            <div style={cssStyle.dialogImglistCont}>
                <ul style={animateLeft}>
                    {imgListView}
                </ul>
            </div>
            <span style={cssStyle.dialogArrowNext}
            />
            <span
                onMouseEnter={() => {
                    if (!canNext) return
                    SetDialogArrowNextHover(true);
                }}
                onMouseLeave={() => {
                    if (!canNext) return
                    SetDialogArrowNextHover(false);
                }}
                onClick={handleChangeNext}
                style={{
                    ...cssStyle.dialogArrowNext,
                    ...(dialogArrowNextHover ? cssStyle.dialogArrowNextHover : ''),
                    ...(canNext ? '' : cssStyle.dialogArrowNextDisable)
                }} />
            <div style={cssStyle.zoom}>
                <span
                    onClick={handlePlus}
                    style={{
                        ...cssStyle.plus,
                        ...(canPlus ? '' : cssStyle.zoom_disabled)
                    }} >+</span>
                <span
                    onClick={handleMinus}
                    style={{
                        ...cssStyle.minus,
                        ...(canMinus ? '' : cssStyle.zoom_disabled)
                    }} >-</span>
            </div>
        </div>
    )
}
export default ImageViewWrap