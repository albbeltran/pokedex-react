import logo from './logo.png';
import './App.css';
import MenuNav from './components/MenuNav';
import Pokedex from './components/Pokedex';
import ContenedorColores from './components/ContenedorColores';

function App() {
  return (
    <div className="App">
      <ContenedorColores></ContenedorColores>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MenuNav></MenuNav>
        <Pokedex></Pokedex>
      </header>
    </div>
  );
}

export default App;
