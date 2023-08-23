import './App.css';
import Logo from './components/molecules/Logo';
import NavBar from './components/organisms/NavBar';

const divStyle = {
    display: "flex"
}

const pStyle = {
    color: "#000",
    fontFamily: "ABeeZee",
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const preStyle = {
    color: "#000",
    fontFamily: "ABeeZee",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
}

const MapPage = () => {
    return (
        <>
        <div className="MapPage">
            <NavBar><Logo>GREENDUKLIFE</Logo></NavBar>
        </div>
        <div style = {divStyle}>
            <div>아이콘</div>
            <p style = {pStyle}>WHERE IS?</p>
            <pre style = {preStyle}>
                우리학교 안에서 
                가장 가까운 
                쓰레기장은 어디일까?
            </pre>
        </div>
        <img></img>
        </>
    );
};

export default MapPage;