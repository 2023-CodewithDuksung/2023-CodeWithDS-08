import React from "react"
import Input from "../atoms/Input"

const formInStyle = (flexDirection, gap) => ({
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: "center",
    alignItems: "center",
    gap: gap,
    // textAlign: "left"
})

const FormIn = (props) => {
    const { label, flexDirection, gap, placeholder, type, name, minLength, maxLength, width, border, borderColor } = props

    return (
        <div style={formInStyle(flexDirection, gap)}>
            <label>{label}</label>
            <Input placeholder={placeholder} type={type} 
            name={name} minLength={minLength} maxLength={maxLength} 
            width={width} border={border} borderColor={borderColor} 
            />
        </div>
    )
}

export default FormIn
