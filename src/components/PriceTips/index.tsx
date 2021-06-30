import React, { useEffect, useRef, useState } from "react"

interface ISProps {
    tipMessage: string
}

const PriceTips = (props: ISProps) => {
    const refTips = useRef(null)
    const [offsetLeft, SetOffsetLeft] = useState<string>('0')
    const [offsetTop, SetOffsetTop] = useState<string>('0')

    const [tips, SetTips] = useState<object>({
        'width': '16px',
        'height': '16px',
        'display': 'inline-block',
        'zoom': '1',
        'position': 'relative',
        'top': '2px',
        'background': 'url(//misc.360buyimg.com/mall/realestate/item/1.0.0/css/i/icon_2.png) no-repeat 0 0'
    })

    const { tipMessage } = props

    const el = document.createElement('div')
    const elDiv = document.createElement('div')
    const elSpan = document.createElement('span')

    const showTip = () => {
        console.log(refTips)
        SetOffsetLeft((refTips.current.offsetLeft - 20) + '')
        SetOffsetTop((refTips.current.offsetTop + 22) + '')
        elSpan.setAttribute('style', 'display: block;width: 0;height: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 10px solid #fff;position: absolute;left: -10px;top: 2px;')
        elDiv.setAttribute('style', 'top: -12px;width: 0;height: 0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:12px solid #CDCBCE;position: absolute;')
        el.setAttribute('style', `position: absolute;left: ${offsetLeft}px;top: ${offsetTop}px;padding: 14px 12px;display: inline-block;line-height: 14px; border: 1px solid #CDCBCE; background: #fff;`)
        el.innerText = tipMessage
        elDiv.appendChild(elSpan)
        el.appendChild(elDiv)
        document.body.appendChild(el)
    }
    const hiddenTip = () => {
        document.body.removeChild(el)
    }


    useEffect(() => {
        SetOffsetLeft((refTips.current.offsetLeft - 20) + '')
        SetOffsetTop((refTips.current.offsetTop + 22) + '')
    }, [props.tipMessage])

    return (
        <div style={tips} ref={refTips} onMouseOver={showTip} onMouseOut={hiddenTip} />
    )
}

export default PriceTips
