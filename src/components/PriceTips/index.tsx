import React, { useEffect, useRef, useState } from "react"

interface ISProps {
    tipMessage: string
}

const PriceTips = (props: ISProps) => {
    const refTips = useRef(null)
    const [offsetLeft, SetOffsetLeft] = useState<string>('0')
    const [offsetTop, SetOffsetTop] = useState<string>('0')
    const [showTip, SetShowTip] = useState<boolean>(false)

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


    const showTipView = () => {
        const elSpan = {
            display: 'block',
            width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid #fff',
            position: 'absolute',
            left: '16px',
            top: '-10px'
        }
        const elDiv = {
            top: '-12px',
            left: '14px',
            width: '0',
            height: '0',
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '12px solid #CDCBCE',
            position: 'absolute'
        }
        const el = {
            position: 'absolute',
            left: '-20px',
            top: '22px',
            width: '160px',
            padding: '14px 12px',
            display: 'inline-block',
            lineHeight: '14px',
            border: '1px solid #CDCBCE',
            background: '#fff',
            fontDamily:'Arial, "microsoft yahei", simsun',
            color: '#666',
            fontSize: '12px'
        }
        return (
            <div style={el}>
                {tipMessage}
                <div style={elDiv}></div>
                <div style={elSpan}></div>
            </div>
        )

    }
    const hiddenTip = () => {
        // document.body.removeChild(el)
        SetShowTip(false)
    }
    return (
        <div style={tips} className="css" ref={refTips} onMouseOver={() => SetShowTip(true)} onMouseOut={hiddenTip} >
            {showTip ? showTipView() : null}
        </div>
    )
}

export default PriceTips
