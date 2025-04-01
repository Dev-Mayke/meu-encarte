import React from 'react';
import './painel.css';
import logo from '../logo.svg';

function Painel() {
    const handleClick = () => {
        window.location.href = "/encartes"; 
      };
      
  return (
    <div className="parent">
      <div className="headerPainel">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      <div className="div2">Conteúdo Principal
        <div className='search-bar-container'>
        <div>SearchBar</div>
        <div>SearchResults</div>
        </div>
      </div>
      <div className="div4">
        <button className="next-button" onClick={handleClick}>Próximo</button>
      </div>
    </div>
  );
}

export default Painel;
