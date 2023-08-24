import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

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

const middleContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}

const writeBtn = {
  marginRight: "30rem",
}

const listContainer = {
  marginTop: "3rem",
  width: "50rem",
  height: "30rem",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "flex-start",
  borderRadius: "20px",
}

const ulStyle = {
  width: "50rem",
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}

const liStyle = {
  margin: "1px",
}

const liStyle2 = {
  // width: "50rem",
  marginRight: "10rem",
}

const line = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width:"45rem",
  height: "7px",
  borderBottom: "1px solid #000000",
}

const ulStyle2 = {
  width: "50rem",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}

const bottomContainer = {
  marginTop: "4rem",
}




const PostListPage = (props) => {
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
        <div style={middleContainer}>
          <div style={writeBtn} onClick={() => setPageState("postwrite")}><Button height={"3rem"} bgcolor={"#5C9259"}>글쓰기</Button></div>
          <div><Input type="search" placeholder="&#128269;" border="none" width="346px" margin="1rem"></Input></div>
        </div>
        <div style={listContainer}>
          <ul style={ulStyle}>
            <li style={liStyle} onClick={() => setPageState("postdetail")}>
              <ul style={ulStyle2}>
                <li style={liStyle2}>1</li>
                <li style={liStyle2}>재활용 따위 하고 싶지 않아</li>
                <li style={liStyle2}>잠이부족해</li>
              </ul>
            </li>
            <div style={line} />
            <li style={liStyle} onClick={() => setPageState("MAP")}>
              <ul style={ulStyle2}>
                <li style={liStyle2}>1</li>
                <li style={liStyle2}>재활용 따위 하고 싶지 않아</li>
                <li style={liStyle2}>잠이부족해</li>
              </ul>
            </li>
            <div style={line}/>
            <li style={liStyle} onClick={() => setPageState("MAP")}>
              <ul style={ulStyle2}>
                <li style={liStyle2}>1</li>
                <li style={liStyle2}>재활용 따위 하고 싶지 않아</li>
                <li style={liStyle2}>잠이부족해</li>
              </ul>
            </li>
            <div style={line}/>
            <li style={liStyle} onClick={() => setPageState("MAP")}>
              <ul style={ulStyle2}>
                <li style={liStyle2}>1</li>
                <li style={liStyle2}>재활용 따위 하고 싶지 않아</li>
                <li style={liStyle2}>잠이부족해</li>
              </ul>
            </li>
            <div style={line}/>
          </ul>
        </div>
        <div style={bottomContainer}>
          <Button height={"3rem"} bgcolor={"#5C9259"}>더보기</Button>
        </div>
      </Main>
    </div>
  )
};

export default PostListPage;