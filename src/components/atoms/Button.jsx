import React from "react"

const buttonStyle = {
//   padding: "0.5rem",
//   width: "1.5rem",
  height: "1.5rem",
  background: "none",
//   border: "none", 
  borderRadius: "0.5rem",
}

const Button = (props) => {
  const { children } = props

  return (
    <button
      style={buttonStyle}
    //   onClick={() => setToggleState(!toggleState)}
    >
      {children}
    </button>
  )
}

export default Button
