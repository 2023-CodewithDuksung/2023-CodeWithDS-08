import React from "react"
import Header from "../templates/Header";
import NavBar from "../organisms/NavBar";
import Logo from "../molecules/Logo";
import Main from "../templates/Main";
import IconBtn from "../atoms/IconBtn";
import InfoItem from "../molecules/InfoItem";
import plasticTip from "../../assets/images/plasticTip.png"

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

const fieldsetStyle = {
    background: "#FDFDFD",
    width: "55rem",
    height: "40rem",
    borderRadius: "0.9375rem",
    border: "0.01rem solid #5C9259",
    marginTop: "3rem"
}

const divStyle = {
    width: "40rem"
}

const divStyle2 = {
    display: "flex"
}

const divStyle3 = {
    marginLeft: "1rem"
}

const captionStyle = {
    width: "40rem",
    fontSize: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: "0",
    padding: "2rem"
}

const hrStyle = {
    width: "36rem"
}

const pStyle = {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    textAlign: "left"
}

const ulStyle = {
    listStyleType: "decimal",
    textAlign: "start",
    padding: "2rem 3rem"
}

const h2Style = {
    textAlign: "left"
}

const pStyle2 = {
    textAlign: "left"
}

const TipDetailPage = () => {
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
                <fieldset style = {fieldsetStyle}>
                    <div style = {divStyle2}>
                        <div style = {divStyle}>
                            <caption style = {captionStyle}>배달플라스틱 용기</caption>
                            <hr style = {hrStyle}></hr>
                            <p style = {pStyle}><b>재활용 분류 : 플라스틱류</b></p>
                            <ul style = {ulStyle}>
                                <li>내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출합니다. 
                                    번거롭더라도 잘 지워지지 않는 기름기는 세제를 사용하여 세척합니다.</li>
                                <li>분리배출 표시를 확인하고 부착상표, 부속품 등 본체와 다른 재질은 
                                    떼어내거나 가위나 칼등으로 해당 부위만 분리제거한 후 배출합니다.</li>
                                <li>‘플라스틱 OTHER’은 다른 플라스틱과 구분하여 배출이 필요합니다.</li>
                            </ul>
                        </div>
                        <img src = {plasticTip} alt = "배달플라스틱용기" width = "250rem" height = "333.33rem"></img>
                    </div>
                    <div style = {divStyle3}>
                        <h2 style = {h2Style}>꿀팁</h2>
                        <p style = {pStyle2}><b>용기가 잘 닦이지 않는다면?</b></p>
                        <p style = {pStyle2}>아무리 닦아도 지워지지 않는 자국은 하루 정도 햇볕에 두어 빨간 양념 자국이 사라지도록 합니다. 
                            고춧가루의 ‘카로티노이드’ 성분이 햇볕에 노출되면 쉽게 산화되어 얼룩이 없어지게 되기 때문입니다. 
                            ‘플라스틱 OTHER’는 2가지 이상의 다른 종류의 플라스틱이 포함되어 있는 것으로 열병합발전의 연료로 
                            쓰이는 방법으로만 재활용이 가능합니다.</p>
                    </div>
                </fieldset>
            </Main>
        </div>
    );
};

export default TipDetailPage;