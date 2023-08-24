import React from "react"

const textStyle = (margin, padding, fontSize, fontFamily, color) => ({
    margin: margin,
    padding: padding,
    width: "fit-contents",
    fontSize: fontSize,
    fontFamily: fontFamily,
    color: color,
    whiteSpace: "pre-line"
})

const P = (props) => {
    const { children, margin, padding, fontSize, fontFamily, color } = props
    return <p style={textStyle(margin, padding, fontSize, fontFamily, color)}>{children}</p>
}

export default P
