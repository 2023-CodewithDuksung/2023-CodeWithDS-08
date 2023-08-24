import React from "react"

const navStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end", 
    marginTop: "auto",
}

const ulStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end", 
    margin: 0,
    padding: 0,
}

const liStyle = { // hover 속성 적용 예정
    display: "inline",
    margin: "0 1.5rem",
    paddingBottom: "0.25rem",
    listStyle: "none",
    color: "#ffffff",
    fontSize: "1rem",
    cursor: "pointer",
}

const NavBar = (props) => {
    const { children, setPageState } = props

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li
                style={liStyle}
                onClick={() => setPageState("MAP")}
                >
                MAP
                </li>
                <li
                style={liStyle}
                onClick={() => setPageState("TIPS")}
                >
                TIPS
                </li>
                <li
                style={liStyle}
                onClick={() => setPageState("LIFE")}
                >
                LIFE
                </li>
                <li
                style={liStyle}
                onClick={() => setPageState("SIGNUP")}
                >
                SIGN UP
                </li>
                {children}
            </ul>
        </nav>
    )
}

export default NavBar
