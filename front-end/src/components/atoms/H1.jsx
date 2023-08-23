import React from "react"

const h1Style = {
  marginBottom: "0.5rem",
  padding: "0 1rem",
  width: "fit-content",
  textAlign: "center",
  backgroundColor: "#ffffff",
}

const H1 = (props) => {
  const { children } = props
  return <h1 style={h1Style}>{children}</h1>
}

export default H1