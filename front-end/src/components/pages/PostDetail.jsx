import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import Photo from "../../assets/images/Group 59.png"

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

const PostDetailPage = (props) => {
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
          <img src={Photo}></img>
        </div>
      </Main>
    </div>
  )
};

export default PostDetailPage;