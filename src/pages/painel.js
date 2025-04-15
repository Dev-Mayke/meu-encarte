import React, { useState } from 'react';
import './painel.css';
import logo from '../logo.svg';
import { SearchBar } from '../components/SearchBar';
import { SearchResultsList } from '../components/SearchResultList';

function Painel() {
  const handleClick = () => {
    window.location.href = "/encartes";
  };

  const [results, setResults] = useState([]);
  const [encarte, setEncarte] = useState([]);

  const [filtros, setFiltros] = useState({
    medicamentos: false,
    higiene: false,
    vitaminas: false,
    cosmeticos: false
  });

  const toggleFiltro = (categoria) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [categoria]: !prevFiltros[categoria]
    }));
  };

  const produtos = [
    {
      id: 1,
    nome: "Dipirona Sódica 500mg",
    descricao: "Analgésico e antitérmico. Caixa com 20 comprimidos.",
    imagem: "/imagem1.png",
    preco: "R$ 8,99",
    categoria: "medicamentos"
  },
    {
      id: 2,
      nome: "Vitamina C Efervescente 1g",
      descricao: "Auxilia na imunidade. Sabor laranja, tubo com 10 comprimidos.",
      imagem: "/imagem2.png",
      preco: "R$ 14,90",
      categoria: "vitaminas"
    },
    {
      id: 3,
      nome: "Shampoo Anticaspa 200ml",
      descricao: "Combate a caspa e fortalece o couro cabeludo.",
      imagem: "/imagem3.png",
      preco: "R$ 19,90",
      categoria: "cosmeticos"
    },
    {
      id: 4,
      nome: "Álcool em Gel 70% 500ml",
      descricao: "Ideal para higienização das mãos. Embalagem prática.",
      imagem: "/imagem4.png",
      preco: "R$ 6,99",
      categoria: "higiene"
    }
  ];

  const produtosFiltrados = produtos.filter((produto) => {
    if (Object.values(filtros).every((v) => !v)) return true;
    return filtros[produto.categoria];
  });

  const adicionarAoEncarte = (produto) => {
    if (!encarte.find(p => p.id === produto.id)) {
      setEncarte([...encarte, produto]);
    }
  };

  const removerDoEncarte = (id) => {
    setEncarte(encarte.filter(p => p.id !== id));
  };

  return (
    <div className="parent">
      <div className="headerPainel">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-bar-header">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div>

      <div className="filtros-barra">
        <label>
          <input
            type="checkbox"
            checked={filtros.medicamentos}
            onChange={() => toggleFiltro('medicamentos')}
          />
          Medicamentos
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtros.higiene}
            onChange={() => toggleFiltro('higiene')}
          />
          Higiene
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtros.vitaminas}
            onChange={() => toggleFiltro('vitaminas')}
          />
          Vitaminas
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtros.cosmeticos}
            onChange={() => toggleFiltro('cosmeticos')}
          />
          Cosméticos
        </label>
      </div>

      <div className="div2">
        {produtosFiltrados.length === 0 ? (
          <p className="mensagem-sem-produtos">Nenhum produto encontrado.</p>
        ) : (
          <div className="produtos-grid">
            {produtosFiltrados.map((produto) => (
              <div className="produto-card" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <strong>{produto.preco}</strong>
                <button className="add-button" onClick={() => adicionarAoEncarte(produto)}>
                  Adicionar ao Encarte
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="div4">
        <button className="next-button" onClick={handleClick}>Próximo</button>

        <div className="encarte-preview">
          <h3>Prévia do Encarte</h3>
          {encarte.length === 0 ? (
            <p>Nenhum produto selecionado.</p>
          ) : (
            encarte.map((item) => (
              <div key={item.id} className="encarte-item">
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <strong>{item.nome}</strong>
                  <p>{item.preco}</p>
                  <button
                    className="remove-button"
                    onClick={() => removerDoEncarte(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Painel;
