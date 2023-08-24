import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";

const wrapperStyle = {
    display: "grid",
    // gridTemplateRows: "1fr 3fr",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    width: "100%",
    textAlign: "left",
};

const imgStyle = {
    padding: "1rem",
    width: "10rem",
    height: "12rem",
    background: "rgba(0, 0, 0, 0.3)",
};

const TipPage = () => {
    return (
        <div style={wrapperStyle}>
            <Header>
                <NavBar>
                    <Logo>GREENDUKLIFE</Logo>
                </NavBar>
            </Header>
            <Main bgcolor="#E7EFE8">
                <div style={containerStyle}>
                    <IconBtn />
                    <InfoItem name={"HOW TO?"} explanation={"이 쓰레기는 \n 어떻게 버려야 하지?"} margin={"0 1rem 0 0"} color={"#000000"} />
                </div>

            </Main>
        </div>
    );
};

export default TipPage;
