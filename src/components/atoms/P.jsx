import React from "react"

const textStyle = (fontSize) => ({
    fontSize: fontSize,
    marginTop: "0.5rem",
    padding: "0.5rem",
    color: "#000000"
})

const P = (props) => {
    const { children, fontSize } = props
    return <p style={textStyle(fontSize)}>{children}</p>
}

export default P
