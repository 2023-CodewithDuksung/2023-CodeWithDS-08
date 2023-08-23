import React from "react"

const h1Style = (color, fontSize) => ({
  marginBottom: "0.5rem",
  padding: "0 1rem",
  width: "fit-content",
  color: color,
  fontSize: fontSize,
  textAlign: "center",
})

const H1 = (props) => {
  const { children, color, fontSize } = props
  return <h1 style={h1Style(color, fontSize)}>{children}</h1>
}

export default H1