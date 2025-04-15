import React, { useEffect, useState } from 'react';
import './encartes.css';

function Encartes() {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [fundo, setFundo] = useState(null);

  useEffect(() => {
    const encarte = localStorage.getItem("encarteSelecionado");
    if (encarte) {
      setProdutosSelecionados(JSON.parse(encarte));
    }
  }, []);

  const handleBackgroundChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => setFundo(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleDownload = () => {
    const element = document.getElementById("flyer");
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(element).then((canvas) => {
        const link = document.createElement("a");
        link.download = "encarte.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  return (
    <div className="encartes-page">
      <h2>Seu Encarte</h2>

      <div className="flyer-container" id="flyer" style={{ backgroundImage: `url(${fundo})` }}>
        {produtosSelecionados.map((produto) => (
          <div key={produto.id} className="flyer-item">
            <img src={produto.imagem} alt={produto.nome} />
            <div>
              <strong>{produto.nome}</strong>
              <p>{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="controles">
        <label className="upload-bg">
          Escolher fundo
          <input type="file" accept="image/*" onChange={handleBackgroundChange} hidden />
        </label>
        <button onClick={handleDownload}>Download do Encarte</button>
      </div>
    </div>
  );
}

export default Encartes;
