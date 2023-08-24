import React from "react"
import Input from "../atoms/Input"

const formInStyle = (flexDirection) => ({
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",    
})

const FormIn = (props) => {
    const { label, flexDirection, placeholder, type, name, minLength, maxLength, width, border, borderColor } = props

    return (
        <div style={formInStyle(flexDirection)}>
            <label>{label}</label>
            <Input placeholder={placeholder} type={type} 
            name={name} minLength={minLength} maxLength={maxLength} 
            width={width} border={border} borderColor={borderColor} 
            />
        </div>
    )
}

export default FormIn
