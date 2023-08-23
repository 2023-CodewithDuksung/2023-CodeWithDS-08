import './App.css';
import Logo from './components/molecules/Logo';
import NavBar from './components/organisms/NavBar';
import Header from './components/templates/Header';

function App() {
  return (
    <div className="App">
      <Header>
      <NavBar><Logo>GREENDUKLIFE</Logo></NavBar></Header>
    </div>
  );
}

export default App;
