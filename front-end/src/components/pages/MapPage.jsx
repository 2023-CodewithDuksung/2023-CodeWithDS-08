import '../../App.css';
import Logo from '../molecules/Logo';
import NavBar from '../organisms/NavBar';
import InfoItem from '../molecules/InfoItem';
import Header from '../templates/Header';
import Main from "../templates/Main";
import nonNamingMap from "../../assets/images/nonNamingMap.png";

const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "2rem",
    gap: "4rem"
}

const divStyle2 = {
     display: "flex"
}

const imgStyle = {
    paddingBottom: "8rem"
}

const ulStyle = {
    listStyleType: "none",
    textAlign: "start",
    background: "#F6F6F6",
    padding: "2.8rem",
    margin: "0",
    width: "15rem",
    height: "18.5rem"
}

const liStyle = {
    margin: "0.5rem 0",
    padding: "0.5rem",
    borderBottom: "0.01rem solid"
}

const captionStyle = {
    textAlign: "center",
    margin: "0 6.5rem",
    
}

const MapPage = () => {
    return (
        <div>
            <div className="MapPage">
                <Header>
                    <NavBar><Logo>GREENDUKLIFE</Logo></NavBar>
                </Header>
                <Main>
                    <div style = {divStyle}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17" cy="17" r="16.5" stroke="black"/>
                                <path d="M24.5 7L7 16.5L24.5 28" stroke="black"/>
                            </svg>
                        </div>
                        <InfoItem name={"WHERE IS?"} explanation={"우리학교 안에서 \n 가장 가까운 \n 쓰레기장은 어디일까?"} margin={"0 5rem"} />
                    </div>
                    <div style = {divStyle2}>
                        <img style = {imgStyle} src = {nonNamingMap} width = '576.11rem' height = '384.67rem' alt = "지도 이미지"></img>
                        <ul style = {ulStyle}>
                            <caption style = {captionStyle}>LIST</caption>
                            <li style = {liStyle}>차미리사관</li>
                            <li style = {liStyle}>1(2)</li>
                            <li style = {liStyle}>2(2)</li>
                            <li style = {liStyle}>3(2)</li>
                            <li style = {liStyle}>4(2)</li>
                        </ul>
                    </div>
                </Main>
            </div>
        </div>
    );
};

export default MapPage;