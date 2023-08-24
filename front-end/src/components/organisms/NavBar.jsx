import React from "react"
import Input from "../atoms/Input"

const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end", 
    gap: "2rem",
    margin: "0.5rem auto",
}

const ulStyle = {
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    margin: 0,
    padding: 0,
}

const liStyle = (color) => ({ // hover 속성 적용 예정
    display: "inline",
    margin: "0 1.5rem",
    paddingBottom: "0.25rem",
    listStyle: "none",
    color: color,
    fontSize: "1rem",
    cursor: "pointer",
})

const NavBar = (props) => {
    const { children, setPageState } = props

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li
                style={liStyle("#ffffff")}
                onClick={() => setPageState("MAP")}
                >
                MAP
                </li>
                <li
                style={liStyle("#ffffff")}
                onClick={() => setPageState("TIPS")}
                >
                TIPS
                </li>
                <li
                style={liStyle("#ffffff")}
                onClick={() => setPageState("LIFE")}
                >
                LIFE
                </li>
                <li
                style={liStyle("#296346")}
                onClick={() => setPageState("SIGNUP")}
                >
                SIGN UP
                </li>
            </ul>
                {children}
                <Input type="search" placeholder="&#128269;" border="none" width="346px" margin="1rem"></Input>
        </nav>
    )
}

export default NavBar
