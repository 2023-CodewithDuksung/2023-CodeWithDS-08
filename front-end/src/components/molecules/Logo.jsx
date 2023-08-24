import React from "react";
import H1 from "../atoms/H1";

const logoBackgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end", 
    height: "100%", 
}

const Logo = (props) => {
    const { setPageState, children } = props;
  
  return (
    <div onClick={()=>{setPageState("main")}} style={logoBackgroundStyle} >
      <H1 color={"#ffffff"} fontSize={"3rem"} margin="0" fontFamily="Changa One">{children}</H1>
    </div>
  )
}

export default Logo;
