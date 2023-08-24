import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import Shortcut from "../organisms/Shortcut";

const wrapperStyle = {
    display: "grid",
    // gridTemplateRows: "1fr 3fr",
}

const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: "2rem",
    width: "100%",
    textAlign: "left",
};

const imgStyle = {
    padding: "1rem",
    width: "10rem",
    height: "12rem",
    background: "rgba(0, 0, 0, 0.3)",
};

const img1Style = {
    ...imgStyle,
    position: "relative",
    left: "-4rem",
};

const img2Style = {
    ...imgStyle,
    width: "15rem",
    height: "16rem",
};

const img3Style = {
    ...imgStyle,
    position: "relative",
    right: "-4rem",
};

const MainPage = () => {
    return (
        <div style={wrapperStyle}>
            <Header>
                <NavBar>
                    <Logo>GREENDUKLIFE</Logo>
                </NavBar>
            </Header>
            <Main gap="3.8rem">
                <Shortcut bgcolor={"#5C9259"} name={"WHERE \n IS?"} explanation={"내 주변 가장 가까운 \n 쓰레기장은 어디일까?"} color={"#ffffff"}></Shortcut>
                <Shortcut bgcolor={"#E7EFE8"} name={"HOW \n TO?"} explanation={"어떻게 버려야 하지?"} color={"#000000"}>
                <div style={containerStyle}>
                    <div style={img1Style}>img</div>
                    <div style={img2Style}>img</div>
                    <div style={img3Style}>img</div>
                </div>
                </Shortcut>
                <Shortcut bgcolor={"#E7EFE8"} name={"OUR \n GREENDUKLIFE"} explanation={"우리의 그린덕라이프를 공유하자"} color={"#000000"}></Shortcut>
            </Main>
        </div>
    );
};

export default MainPage;
