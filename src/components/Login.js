import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
// import logo from '../logo.svg'; // Certifique-se de que o caminho do logo está correto

function Login() {
  const handleClick = () => {
    window.location.href = "/painel"; // Redireciona para a página "painel"
  };

  return (
    <div className="login-content">
      {/* <div className="div1">
        <img src={logo} className="App-logo" alt="logo" />
      </div> */}
      <div className="div">
        <div className="login-wrapper">
          <div className="login-form-container">
            <h3 className="login-title">Olá funcionário</h3>
            <p className="subtitle">Você pode acessar ou criar sua conta abaixo</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* Link para "Esqueci a senha" */}
              <div className="forgot-password">
                <a href="/esqueci-senha">Esqueci a senha</a>
              </div>

              <Button variant="primary" className="w-100" onClick={handleClick}>
                Entrar
              </Button>

              {/* Link para "Cadastrar-se" */}
              <div className="register-link">
                <span>Não tem conta? <a href="/cadastro">Cadastre-se</a></span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;