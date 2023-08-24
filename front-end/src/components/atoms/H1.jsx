import React from "react"

const h1Style = (padding, color, fontSize) => ({
    margin: 0,
    padding: padding,
    width: "fit-contents",
    color: color,
    fontSize: fontSize,
    whiteSpace: "pre-line"
})

const H1 = (props) => {
    const { children, padding, color, fontSize } = props
    return <h1 style={h1Style(padding, color, fontSize)}>{children}</h1>
}

export default H1