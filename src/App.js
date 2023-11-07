import logo from './logo.png';
import './App.css';
import MenuNav from './components/MenuNav';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MenuNav></MenuNav>
        <Pokedex></Pokedex>
      </header>
    </div>
  );
}

export default App;
