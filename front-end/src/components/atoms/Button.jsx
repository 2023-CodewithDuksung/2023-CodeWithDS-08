import React from "react"

const buttonStyle = (width, height, bgcolor, color, gridRow, gridColumn) => ({
    padding: "1rem",
    width: width,
    height: height,
    border: "none", 
    borderRadius: "1rem",
    fontSize: "1rem",
    color: color,
    background: bgcolor,
    gridRow: gridRow,
    gridColumn: gridColumn
})

const Button = (props) => {
    const { children, width, height, bgcolor, color, gridRow, gridColumn } = props

    return (
        <button
        type="submit"
        style={buttonStyle(width, height, bgcolor, color, gridRow, gridColumn)}
        //   onClick={() => setToggleState(!toggleState)}
        >
        {children}
        </button>
    )
}

export default Button
