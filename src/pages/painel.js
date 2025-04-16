import React, { useState } from 'react';
import './painel.css';
import logo from '../logo.svg';
import { SearchBar } from '../components/SearchBar';
import { SearchResultsList } from '../components/SearchResultList';

function Painel() {
  const handleClick = () => {
    if (encarte.length === 0) {
      alert("Selecione pelo menos um produto antes de continuar.");
      return;
    }
    localStorage.setItem("encarteSelecionado", JSON.stringify(encarte));
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
    },
    
  {
    id: 5,
    nome: "Paracetamol 750mg",
    descricao: "Analgésico e antitérmico. Embalagem com 20 comprimidos.",
    imagem: "/imagem5.png",
    preco: "R$ 9,50",
    categoria: "medicamentos"
  },
  {
    id: 6,
    nome: "Escova Dental Macia",
    descricao: "Cerdas macias com limpador de língua.",
    imagem: "/imagem6.png",
    preco: "R$ 4,20",
    categoria: "higiene"
  },
  {
    id: 7,
    nome: "Multivitamínico A-Z",
    descricao: "Suplemento completo para o dia a dia. 60 cápsulas.",
    imagem: "/imagem7.png",
    preco: "R$ 29,90",
    categoria: "vitaminas"
  },
  {
    id: 8,
    nome: "Sabonete Líquido Facial 150ml",
    descricao: "Limpa sem ressecar. Indicado para todos os tipos de pele.",
    imagem: "/imagem8.png",
    preco: "R$ 17,80",
    categoria: "cosmeticos"
  },
  {
    id: 9,
    nome: "Luva de Látex Descartável",
    descricao: "Embalagem com 50 unidades, ideal para uso em serviços de saúde.",
    imagem: "/imagem9.png",
    preco: "R$ 15,00",
    categoria: "higiene"
  },
  {
    id: 10,
    nome: "Cálcio + Vitamina D",
    descricao: "Suplemento para saúde óssea. Embalagem com 60 cápsulas.",
    imagem: "/imagem10.png",
    preco: "R$ 22,90",
    categoria: "vitaminas"
  },
  {
    id: 11,
    nome: "Protetor Solar FPS 50 120g",
    descricao: "Proteção solar de amplo espectro. Ideal para todos os tipos de pele.",
    imagem: "/imagem11.png",
    preco: "R$ 39,90",
    categoria: "cosmeticos"
  },
  {
    id: 12,
    nome: "Soro Fisiológico 500ml",
    descricao: "Solução isotônica para limpeza e hidratação. Embalagem com 500ml.",
    imagem: "/imagem12.png",
    preco: "R$ 7,90",
    categoria: "medicamentos"
  },
  {
    id: 13,
    nome: "Creme Hidratante Facial 50g",
    descricao: "Hidratação profunda para a pele do rosto.",
    imagem: "/imagem13.png",
    preco: "R$ 29,90",
    categoria: "cosmeticos"
  },
  {
    id: 14,
    nome: "Dente de Leite 30 cápsulas",
    descricao: "Suplemento natural para saúde dentária.",
    imagem: "/imagem14.png",
    preco: "R$ 15,00",
    categoria: "vitaminas"
  },
  {
    id: 15,
    nome: "Xarope de Gripe 200ml",
    descricao: "Alívio rápido para sintomas de gripe e resfriado.",
    imagem: "/imagem15.png",
    preco: "R$ 25,90",
    categoria: "medicamentos"
  },
  {
    id: 16,
    nome: "Antisséptico Bucal 250ml",
    descricao: "Previne doenças bucais e combate o mau hálito.",
    imagem: "/imagem16.png",
    preco: "R$ 9,90",
    categoria: "higiene"
  },
  {
    id: 17,
    nome: "Cápsulas de Ômega 3 60 unidades",
    descricao: "Suplemento alimentar para saúde cardiovascular.",
    imagem: "/imagem17.png",
    preco: "R$ 34,90",
    categoria: "vitaminas"
  },
  {
    id: 18,
    nome: "Shampoo Anticaspa 400ml",
    descricao: "Formulação para controlar a oleosidade do couro cabeludo.",
    imagem: "/imagem18.png",
    preco: "R$ 24,90",
    categoria: "cosmeticos"
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
