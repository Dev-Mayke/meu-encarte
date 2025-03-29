import React from 'react';
import './painel.css';

function Painel() {
    const handleClick = () => {
        window.location.href = "/encartes"; 
      };
      
  return (
    <div className="parent">
      <div className="div1">Header</div>
      <div className="div3">Menu</div>
      <div className="div2">Conteúdo Principal</div>
      <div className="div4">
        <button className="next-button" onClick={handleClick}>Próximo</button>
      </div>
    </div>
  );
}

export default Painel;
