import React from 'react'
const CompassMap = ({ type = 1, transform = 'translate(10775.096 -16032.766)' }) => {


    const compass2 = (
        <g id="compass-map" transform={"translate(-838.646 -2587.864)"}>
            <circle id="Ellipse_103" data-name="Ellipse 103" cx="22.5" cy="22.5" r="22.5" transform="translate(827.646 2584.268) rotate(-16)" fill="#fff" opacity="0.4" />
            <path id="Union_33" data-name="Union 33" d="M-1800.786,20792.021a2.072,2.072,0,0,1-1.54-.646,2.144,2.144,0,0,1-.635-1.562v-3.875a2.052,2.052,0,0,1-1.17-.771,2.132,2.132,0,0,1-.472-1.352v-4.375a3.052,3.052,0,0,1,.554-1.793,3,3,0,0,1,1.456-1.125,3.583,3.583,0,0,1-.7-2.166,3.555,3.555,0,0,1,1.066-2.584,3.451,3.451,0,0,1,2.543-1.084,3.453,3.453,0,0,1,2.544,1.084,3.554,3.554,0,0,1,1.066,2.584,3.585,3.585,0,0,1-.7,2.166,3.009,3.009,0,0,1,1.457,1.125,3.051,3.051,0,0,1,.554,1.793v4.375a2.139,2.139,0,0,1-.472,1.352,2.049,2.049,0,0,1-1.17.771v3.875a2.137,2.137,0,0,1-.636,1.563,2.065,2.065,0,0,1-1.538.646Z" transform="translate(2655.578 -18181.494)" fill="#e20a16" />
        </g>
    )

    const compass3 = (
        <g id="compass-map" data-name="Group 3752" transform="translate(11308.426 -16073.436)">
        <circle id="Ellipse_103" data-name="Ellipse 103" cx="22.5" cy="22.5" r="22.5" transform="translate(-11308.426 16085.84) rotate(-16)" fill="#fff" opacity="0.4"/>
        <path id="Union_33" data-name="Union 33" d="M-1800.786,20792.021a2.072,2.072,0,0,1-1.54-.646,2.144,2.144,0,0,1-.635-1.562v-3.875a2.052,2.052,0,0,1-1.17-.771,2.132,2.132,0,0,1-.472-1.352v-4.375a3.052,3.052,0,0,1,.554-1.793,3,3,0,0,1,1.456-1.125,3.583,3.583,0,0,1-.7-2.166,3.555,3.555,0,0,1,1.066-2.584,3.451,3.451,0,0,1,2.543-1.084,3.453,3.453,0,0,1,2.544,1.084,3.554,3.554,0,0,1,1.066,2.584,3.585,3.585,0,0,1-.7,2.166,3.009,3.009,0,0,1,1.457,1.125,3.051,3.051,0,0,1,.554,1.793v4.375a2.139,2.139,0,0,1-.472,1.352,2.049,2.049,0,0,1-1.17.771v3.875a2.137,2.137,0,0,1-.636,1.563,2.065,2.065,0,0,1-1.538.646Z" transform="translate(-9480.494 -4679.922)" fill="#e20a16"/>
      </g>
    )
    if (type === 2) return compass2
    if (type === 3) return compass3

    return (
        <g id="compass-map" transform={transform}>
            <circle id="Ellipse_103" data-name="Ellipse 103" cx="22.5" cy="22.5" r="22.5" transform="translate(0 12.403) rotate(-16)" fill="#fff" opacity="0.4" />
            <path id="Union_33" data-name="Union 33" d="M-1800.786,20792.021a2.072,2.072,0,0,1-1.54-.646,2.144,2.144,0,0,1-.635-1.562v-3.875a2.052,2.052,0,0,1-1.17-.771,2.132,2.132,0,0,1-.472-1.352v-4.375a3.052,3.052,0,0,1,.554-1.793,3,3,0,0,1,1.456-1.125,3.583,3.583,0,0,1-.7-2.166,3.555,3.555,0,0,1,1.066-2.584,3.451,3.451,0,0,1,2.543-1.084,3.453,3.453,0,0,1,2.544,1.084,3.554,3.554,0,0,1,1.066,2.584,3.585,3.585,0,0,1-.7,2.166,3.009,3.009,0,0,1,1.457,1.125,3.051,3.051,0,0,1,.554,1.793v4.375a2.139,2.139,0,0,1-.472,1.352,2.049,2.049,0,0,1-1.17.771v3.875a2.137,2.137,0,0,1-.636,1.563,2.065,2.065,0,0,1-1.538.646Z" transform="translate(1827.932 -20753.358)" fill="#e20a16" />
        </g>

    )
}

export default CompassMap
