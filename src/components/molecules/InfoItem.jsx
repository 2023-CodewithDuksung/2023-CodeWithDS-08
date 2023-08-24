import React from "react"
import H1 from "../atoms/H1"
import P from "../atoms/P"

const infoItemStyle = {
    margin: "0 48px 1rem",
    textAlign: "left"
}

const InfoItem = ({ name, explanation }) => {
    return (
        <div style={infoItemStyle}>
            <H1>{name}</H1>
            <P fontSize="1rem">{explanation}</P>
        </div>
    )
}

export default InfoItem
