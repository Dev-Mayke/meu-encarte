import logo from './logo.svg'; 
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="parent">
      <div className="div1">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="div2">
        <Login />
      </div>
    </div>
  );
}

export default App;
