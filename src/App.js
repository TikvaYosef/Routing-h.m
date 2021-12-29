import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Router from './components/Router/Router';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <HomePage/>
        <NavBar/>
        <Router/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
