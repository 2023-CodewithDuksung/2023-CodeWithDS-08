import React from "react"

const headerStyle = {
    display: "flex",
    padding: "2rem 3rem",
    // width: "100%", // 헤더 잘림 현상 있음
    height: "16vh",
    backgroundColor: "#95BFA0",
}

const Header = (props) => {
    const { children } = props
    return <header style={headerStyle}>{ children }</header>
}

export default Header
