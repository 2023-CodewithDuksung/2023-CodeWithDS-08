import React from "react"

const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "9rem",
    backgroundColor: "#95BFA0",
}

const ulStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    margin: 0,
    padding: 0,
}

const liStyle = { // 추후에 hover 속성 적용 예정
    display: "inline",
    margin: "0 1.5rem",
    paddingBottom: "0.25rem",
    listStyle: "none",
    color: "#ffffff",
    fontSize: "1.25rem",
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
                {children}
                <li
                style={liStyle}
                onClick={() => setPageState("SEARCH")}
                >
                SEARCH
                </li>
                <li
                style={liStyle}
                onClick={() => setPageState("SIGNUP")}
                >
                SIGN UP
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
