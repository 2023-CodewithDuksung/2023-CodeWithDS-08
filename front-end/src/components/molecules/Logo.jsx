import React from "react";
import H1 from "../atoms/H1";

const logoBackgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const Logo = (props) => {
    const { children } = props;
  
  return (
    <div style={logoBackgroundStyle}>
      <H1 color={"#ffffff"} fontSize={"3rem"}>{children}</H1>
    </div>
  )
}

export default Logo;
