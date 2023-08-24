import React from "react"

const textStyle = (margin, padding, fontSize, color) => ({
    margin: margin,
    padding: padding,
    width: "fit-contents",
    fontSize: fontSize,
    color: color,
    whiteSpace: "pre-line"
})

const P = (props) => {
    const { children, margin, padding, fontSize, color } = props
    return <p style={textStyle(margin, padding, fontSize, color)}>{children}</p>
}

export default P
