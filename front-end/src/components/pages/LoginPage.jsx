import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";
import H1 from "../atoms/H1";
import FormIn from "../molecules/FormIn";
import Button from "../atoms/Button";

const wrapperStyle = {
    display: "grid",
    // gridTemplateRows: "1fr 3fr",
    overflow: "hidden"
}

const containerStyle = {
    display: "flex",
    // justifyContent: "center",
    gap: "4rem",
    paddingLeft: "25rem",
    width: "100%",
    textAlign: "left",
};

const loginStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    width: "70vw",
    minHeight: "60vh",
    background: "#E7EFE8",
};

const formStyle = {
    display: "grid",
    gridTemplateColumns: "4fr 1fr", // 4:1 비율로 구성
    gridTemplateRows: "1fr 1fr", // 2개의 동일한 높이의 행 생성
    gap: "1rem",
    justifyContent: "center",
    width: "20rem",
}

const buttonBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0"
}

const borderStyle = {
    border: "1px solid #000000",
    width: "0.1px",
    height: "30px"
}
  
const LoginPage = () => {
    return (
        <div style={wrapperStyle}>
            <Header>
                <NavBar>
                    <Logo>GREENDUKLIFE</Logo>
                </NavBar>
            </Header>
            <Main gap={"1rem"} bgcolor="#ffffff">
                <div style={containerStyle}>
                    <IconBtn />
                    <InfoItem name={"MY PAGE"} color={"#000000"} />
                </div>
                <div style={loginStyle}>
                      <H1 padding="1rem 0">Login</H1>
                      <form method="POST" style={formStyle}>
                          <FormIn label={"E-mail"} placeholder={"E-mail을 입력해 주세요."} type={"email"} width={"fit-content"} border={"none"} />
                          <FormIn label={"PW"} placeholder={"비밀번호를 입력해 주세요."} type={"password"} width={"fit-content"} border={"none"} />
                          <Button gridRow={"1 / span 2"} gridColumn={"2"} bgcolor={"#296346"} width={"120px"} height={"120px"} color={"#ffffff"} >Sign up</Button>
                      </form>
                  <div style={buttonBoxStyle}>
                    <Button border="none" bgcolor="none">비밀번호 찾기</Button>
                    <div style={borderStyle} />
                    <Button border="none" bgcolor="none">회원가입</Button>
                  </div>
                </div>
              </Main>
          </div>
      );
  };

export default LoginPage;
