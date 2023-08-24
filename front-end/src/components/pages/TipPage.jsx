import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";
import Input from "../atoms/Input";
import School1 from "../../assets/images/School1.png"
import School2 from "../../assets/images/School2.png"
import School3 from "../../assets/images/School3.png"
import Home1 from "../../assets/images/Home1.png"
import Home2 from "../../assets/images/Home2.png"
import Home3 from "../../assets/images/Home3.png"
import Hit2 from "../../assets/images/Hit2.png"
import Hit3 from "../../assets/images/Hit3.png"
import P from "../atoms/P";

const wrapperStyle = {
    display: "grid",
    // gridTemplateRows: "1fr 3fr",
}

const alignStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6rem",
    margin: "3rem 0",
    width: "100%",
    textAlign: "left",
};

const bestStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "3rem"
}

const imgContainerStyle = {
    position: "relative",
    width: "10rem",
    height: "12rem",
};

const imgStyle = {
    // padding: "1rem",
    width: "100%",
    height: "100%",
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
                <div style={alignStyle}>
                    <div style={containerStyle}>
                        <IconBtn />
                        <InfoItem name={"HOW TO?"} explanation={"이 쓰레기는 \n 어떻게 버려야 하지?"} margin={"0 2rem 0 0"} color={"#000000"} />
                    </div>
                    <Input margin={"0 0 3rem 0"} type="search" placeholder="&#128269;" border="none" width="346px" />

                    <P>교내 best 클릭 수</P>
                    <div style={bestStyle}>
                        <div style={imgContainerStyle}>
                            <img src={School1} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={School2} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={School3} style={imgStyle} />
                        </div>
                    </div>
                    <P>가정 best 클릭 수</P>
                    <div style={bestStyle}>
                        <div style={imgContainerStyle}>
                            <img src={Home1} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={Home2} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={Home3} style={imgStyle} />
                        </div>
                    </div>
                    <P>전체 조회수</P>
                    <div style={bestStyle}>
                        <div style={imgContainerStyle}>
                            <img src={School2} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={Hit2} style={imgStyle} />
                        </div>
                        <div style={imgContainerStyle}>
                            <img src={Hit3} style={imgStyle} />
                        </div>
                    </div>
                </div>
            </Main>
        </div>
    );
};

export default TipPage;
