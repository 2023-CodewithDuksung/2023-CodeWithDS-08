import React from "react"

const buttonStyle = (width, bgcolor, color) => ({
    padding: "1rem",
    width: width,
    height: "1.5rem",
    border: "none", 
    borderRadius: "1rem",
    fontSize: "1rem",
    color: color,
    backgroundColor: bgcolor,
})

const Button = (props) => {
    const { children, width, bgcolor, color } = props

    return (
        <button
        style={buttonStyle(width, bgcolor, color)}
        //   onClick={() => setToggleState(!toggleState)}
        >
        {children}
        </button>
    )
}

export default Button
