import React from "react"

const iconBtnStyle = {
    margin: 0,
    padding: 0,
    background: "none",
    border: "none", 
}

const IconBtn = (props) => { // color 적용 안 됨
    const { setPageState, page, color } = props

    return (
        <button
        style={iconBtnStyle}
        onClick={() => setPageState(page)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={color}><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
        </button>
    )
}

export default IconBtn
