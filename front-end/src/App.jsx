import React, { useState } from 'react';
import './App.css';
import MainPage from './components/pages/MainPage';
import MapPage from './components/pages/MapPage';
import TipPage from './components/pages/TipPage';
import SignupPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import MapDetailPage from './components/pages/MapDetailPage';
import TipDetailPage from './components/pages/TipDetailPage';
import PostListPage from './components/pages/PostList';
import PostDetailPage from './components/pages/PostDetail';
import PostWritePage from './components/pages/PostWrite';


function App() {
  const pageStateType = "main" || "map" || "tip" || "community" || "signup" || "login"
  const [pageState, setPageState] = useState("main")

  return (
    <div className="App">
      {pageState? pageState == "main" && (
        <MainPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "map" && (
        <MapPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "tip" && (
        <TipPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "community" && (
        <PostListPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "postwrite" && (
        <PostWritePage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "postdetail" && (
        <PostDetailPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "signup" && (
        <SignupPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "login" && (
        <LoginPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "mapdetail" && (
        <MapDetailPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "tipdetail" && (
        <TipDetailPage setPageState={setPageState} />
      ) : <p>No data here</p>}
      {pageState? pageState == "login" && (
        <LoginPage setPageState={setPageState} />
      ) : <p>No data here</p>}
    </div>
  );
}

export default App;
