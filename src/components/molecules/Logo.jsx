import React from "react";
import H1 from "../atoms/H1";

const logoBackgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end", 
    height: "100%", 
}

const additionalH1Style = {
    margin: 0
}

const Logo = (props) => {
    const { children } = props;
  
  return (
    <div style={logoBackgroundStyle}>
      <H1 color={"#ffffff"} fontSize={"3rem"} style={ additionalH1Style}>{children}</H1>
    </div>
  )
}

export default Logo;
