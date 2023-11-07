import logo from './logo.png';
import './App.css';
import MenuNav from './components/MenuNav';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MenuNav></MenuNav>
        <Pokemon></Pokemon>
      </header>
    </div>
  );
}

export default App;
