import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const h1Style = {
  display: "flex",
  width: "45.0625rem",
  height: "42.4375rem",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: "0",
  color: "#59745C",
  fontFamily: "Changa One",
  fontSize: "8rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal"
}
const InitialPage = () => {  //3초 뒤 메인 페이지로 이동
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/main');  //메인페이지?
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div>
      <h1 style = {h1Style}>GREEN DUK LIFE</h1>
    </div>
  );
};

export default InitialPage;