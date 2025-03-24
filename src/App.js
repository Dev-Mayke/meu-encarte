import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div class="parent">
        <div class="div1">
        <img src={logo} className="App-logo" alt="logo" /> 
        </div>
        <div className="div2">
                <div className="login-card">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Senha" className="input-field" />
                    <button className="login-button">Entrar</button>
                </div>
            </div>
    </div>
  );
}

export default App;
