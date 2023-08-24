import React from "react"

const h1Style = (margin, padding, color, fontSize, fontFamily) => ({
    margin: margin, 
    padding: padding,
    width: "fit-contents",
    color: color,
    fontSize: fontSize,
    fontFamily: fontFamily,
    whiteSpace: "pre-line"
})

const H1 = (props) => {
    const { children, margin, padding, color, fontSize, fontFamily } = props
    return <h1 style={h1Style(margin, padding, color, fontSize, fontFamily)}>{children}</h1>
}

export default H1