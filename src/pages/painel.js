import React, { useState } from 'react';
import './painel.css';
import logo from '../logo.svg';
import { SearchBar } from '../components/SearchBar';
import { SearchResultsList } from '../components/SearchResultList';


function Painel() {
    const handleClick = () => {
        window.location.href = "/encartes"; 
      };
      
const [results, setResults] = useState([])

  return (
    <div className="parent">
      <div className="headerPainel">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      <div className="div2">Conteúdo Principal
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      </div>
      <div className="div4">
        <button className="next-button" onClick={handleClick}>Próximo</button>
      </div>
    </div>
  );
}

export default Painel;
