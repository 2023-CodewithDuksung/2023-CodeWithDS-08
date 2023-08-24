import React from "react";

const mainStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3.8rem",
    padding: "2rem",
    // backgroundColor: "#999999",
    // minHeight: "calc(100vh - 30vh)", 
};

const Main = (props) => {
    const { children } = props;
    return <main style={mainStyle}>{children}</main>;
};

export default Main;
