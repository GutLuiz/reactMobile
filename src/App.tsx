import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register'; // Importe seu componente de registro
import Home from './components/Home'; // Importe seu componente inicial ou outra página

function App() {
  return (
    <Router>
      <div className="App">  
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
          <Route path="/register" element={<Register />} /> {/* Rota para o registro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
