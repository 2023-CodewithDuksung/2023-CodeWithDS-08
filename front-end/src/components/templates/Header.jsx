import React from "react"

const headerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    padding: "2rem 3rem",
    height: "11rem",
    backgroundColor: "#95BFA0",
}

const Header = (props) => {
    const { children } = props
    return <header style={headerStyle}>{ children }</header>
}

export default Header
