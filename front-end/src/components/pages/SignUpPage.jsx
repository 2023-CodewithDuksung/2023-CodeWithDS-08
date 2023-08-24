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

const signUpStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    padding: "5rem 0",
    width: "70vw",
    minHeight: "60vh",
    background: "#E7EFE8",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    width: "20rem",
}

const marginStyle ={
    marginTop: "5rem"
}
  
const SignupPage = (props) => {
    const {setPageState}=props

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
                <div style={signUpStyle}>
                    <form method="POST" style={formStyle}>
                        <FormIn label={"ID"} placeholder={"ID를 입력해 주세요."} type={"email"} gap={"0"} flexDirection={"column"} width={"358px"} border={"none"} />
                        <FormIn label={"PW"} placeholder={"비밀번호를 입력해 주세요."} type={"password"} gap={"0"} flexDirection={"column"} width={"358px"} border={"none"} />
                        <FormIn label={"E-Mail"} placeholder={"E-Mail을 입력해 주세요."} type={"password"} gap={"0"} flexDirection={"column"} width={"358px"} border={"none"} />
                        <FormIn label={"Nickname"} placeholder={"닉네임을 입력해 주세요."} type={"password"} gap={"0"} flexDirection={"column"} width={"358px"} border={"none"} />
                        <div onClick={()=>{setPageState("login")}} style={marginStyle}>
                            <Button  bgcolor={"#296346"} width={"390px"} height={"50px"} color={"#ffffff"} >Sign up</Button>
                        </div>
                    </form>
                </div>
              </Main>
          </div>
      );
  };

export default SignupPage;
