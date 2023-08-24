import React from "react"
import InfoItem from "../molecules/InfoItem"
import IconBtn from "../atoms/IconBtn"

const shortcutStyle = (bgcolor) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", 
    padding: "2rem",
    width: "70%",
    minHeight: "20rem",
    height: "fit-content",
    backgroundColor: bgcolor
})

const containerStyle = {
    width: "100%",
    textAlign: "left",
}

const Shortcut = (props) => {
    const { setPageState, page, children, bgcolor, name, explanation, color } = props

    return (
        <div style={shortcutStyle(bgcolor)}>
            <div style={containerStyle}>
                <InfoItem flexDirection="column" name={name} explanation={explanation} h1Size="36px" pSize="24px" margin="0" padding="0" color={color} />
                <IconBtn setPageState={setPageState} page={page} color={color} />
                {children}
            </div>
        </div>
    )
}

export default Shortcut
