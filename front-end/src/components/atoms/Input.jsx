import React from "react"

const inputStyle = (margin, width, border, borderColor) => ({
    margin: margin,
    padding: "16px",
    width: width,
    height: "24px",
    border: border, 
    borderRadius: "1rem",
    fontSize: "1rem",
    borderColor: borderColor
})

const Input = (props) => {
    const { margin, width, placeholder, type, name, minLength, maxLength, border, borderColor} = props

    return (
        <>
            <style>{`
                input::placeholder {
                    font-size: 0.8rem;
                }
            `}</style>

            <input
            style={inputStyle(margin, width, border, borderColor)}
            placeholder={placeholder}
            type={type}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            />
        </>
    )
}

export default Input
