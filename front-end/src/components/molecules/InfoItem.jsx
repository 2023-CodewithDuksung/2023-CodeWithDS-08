import React from "react"
import H1 from "../atoms/H1"
import P from "../atoms/P"

const infoItemStyle = (flexDirection) => ({
    display: "flex",
    flexDirection: flexDirection,
    // margin: "0 48px 1rem",
    textAlign: "left"
})

const InfoItem = (props) => {
    const { flexDirection, h1Size, pSize, name, margin, padding, color, explanation } = props

    return (
        <div style={infoItemStyle(flexDirection)}>
            <H1 fontSize={h1Size} margin={margin} padding={padding} color={color}>{name}</H1>
            <P fontSize={pSize} fontFamily={"ABeeZee"} margin={margin} padding={padding} color={color}>{explanation}</P>
        </div>
    )
}

export default InfoItem
