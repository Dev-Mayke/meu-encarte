import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Painel from './pages/painel';
import Encartes from './pages/encartes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/encartes" element={<Encartes />} />
      </Routes>
    </Router>
  );
}

export default App;

