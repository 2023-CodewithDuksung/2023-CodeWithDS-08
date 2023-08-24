import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";
import Button from "../atoms/Button";
import H1 from "../atoms/H1";
import P from "../atoms/P";

const topContainer ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}

const iconContainer ={
  margin: 0,
  padding: 0,
}

const photoContainer = {
  paddingTop: "1rem",
  marginTop: "1rem",
  width: "50rem",
  height: "70rem",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "20px",
}
const twoPhoto = {
  width:"70rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
}

const photo1 = {
  width:"20rem",
  height: "14rem",
  backgroundColor: "#D9D9D9",
  marginRight: "1rem",
  borderRadius: "20px",
}

const photo2 = {
  width:"20rem",
  height: "14rem",
  backgroundColor: "#D9D9D9",
  borderRadius: "20px",
}

const line = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width:"45rem",
  height: "7px",
  borderBottom: "2px solid #000000",
  marginBottom: "3rem",
}

const bottomContainer = {
  marginTop: "4rem",
}

const titleContainer ={
  width: "45rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop:"3rem",
}
const title = {
}
const content = {
  width: "41rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "3rem",
}

const PostWritePage = (props) => {
  const color = "#000000";
  const { children, setPageState } = props

  return(
    <div>
      <Header>
        <NavBar>
          <Logo>GREENDUKLIFE</Logo>
        </NavBar>
      </Header>
      <Main bgcolor={"#E7EFE8"}>
        <div style={topContainer}>
          <div style={iconContainer}><IconBtn color={color} /></div>
          <div><InfoItem name={"OUR \n GREENDUKLIFE"} margin={'4rem'} explanation={"그린덕라이프를 지키기 위해 \n 우리는 무엇을 할 수 있을까?"} pSize={'20px'}/></div>
        </div>
        <div style={photoContainer}>
          <div style={titleContainer}>
            <div stlye={title}><H1 margin={"0"}>제목</H1></div>
            <div><p>닉네임</p></div>
          </div>
          <div style={line}/>
          <div style={twoPhoto}>
            <div style={photo1}></div>
            <div style={photo2}></div>
          </div>
          <div style={twoPhoto}><div style={photo1}/><div style={photo2}/></div>
          <div style={content}><P>글을 여기에 작성해주세요.</P></div>
        </div>
        <div style={bottomContainer}>
          <Button width={"8rem"} height={"3rem"} bgcolor={"#5C9259"}>발행하기</Button>
        </div>
      </Main>
    </div>
  )
};

export default PostWritePage;