import Logo from '../molecules/Logo';
import NavBar from '../organisms/NavBar';
import InfoItem from '../molecules/InfoItem';
import Header from '../templates/Header';
import Main from "../templates/Main";
import wastebasket from "../../assets/images/wastebasket.jpeg";

const MapPageBgColor = {
    background: "#E7EFE8"
}

const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "6rem",
    paddingBottom: "2rem",
    gap: "4rem"
}

const fieldsetStyle = {
    background: "#FDFDFD",
    width: "55rem",
    height: "40rem",
    borderRadius: "0.9375rem",
    border: "0.01rem solid #5C9259"

}

const imgStyle = {
    paddingTop: "5rem"
}

const ulStyle = {
    listStyleType: "none",
    textAlign: "start",
    padding: "2.5rem",
    margin: "0 10rem"
}

const liStyle = {
    margin: "0.5rem 0",
    padding: "0.5rem 0",
    borderTop: "0.01rem solid"
}

const MapDetailPage = () => {
    return (
        <div>
            <div style = {MapPageBgColor}>
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
                    <fieldset style = {fieldsetStyle}>
                        <img style = {imgStyle} src = {wastebasket} width = '450rem' height = '337.2rem' alt = '쓰레기통 사진'></img>
                        <ul style = {ulStyle}>
                            <li style = {liStyle}>위치 : 3층 엘리베이터 우측</li>
                            <li>종류 : 종이류, 캔류, 유리병류, 플라스틱류, 일반 쓰레기</li>
                        </ul>
                    </fieldset>
                </Main>
            </div>
        </div>
    );
};
export default MapDetailPage;