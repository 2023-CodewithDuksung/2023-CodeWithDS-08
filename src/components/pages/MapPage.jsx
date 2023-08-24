import '../../App.css';
import Logo from '../molecules/Logo';
import NavBar from '../organisms/NavBar';
import InfoItem from "../molecules/InfoItem";

const divStyle = {
    display: "flex"
}

const MapPage = () => {
    return (
        <div>
            <div className="MapPage">
                <NavBar><Logo>GREENDUKLIFE</Logo></NavBar>
            </div>
            <div style = {divStyle}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <circle cx="17" cy="17" r="16.5" stroke="black"/>
                        <path d="M24.5 7L7 16.5L24.5 28" stroke="black"/>
                    </svg>
                </div>
                <InfoItem name="WHERE IS?" explanation="우리학교 안에서 가장 가까운 쓰레기장은 어디일까?" />
            </div>
        </div>
    );
};

export default MapPage;