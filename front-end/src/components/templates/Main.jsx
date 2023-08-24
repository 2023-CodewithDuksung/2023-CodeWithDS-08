import React from "react";

const mainStyle = (gap, bgcolor) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: gap,
    padding: "2rem",
    minHeight: "calc(100vh - 30vh)", 
    height: "fit-content",
    backgroundColor: bgcolor,
})

const Main = (props) => {
    const { children, gap, bgcolor } = props;
    return <main style={mainStyle(gap, bgcolor)}>{children}</main>;
};

export default Main;