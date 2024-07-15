import './App.css';
import React from 'react';
import Navbar from './compohome/nav';
import Footer from './footer';
import Home from './compohome/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import CadastroForm from './compohome/cadastro';
import Sobreosite from './compohome/sobreosite';
import Guiasturis from './compohome/guiasturis';
import Inicio from './compohome/Inicio';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={< Inicio />} />
            <Route path="/register" element={<CadastroForm />} />
            <Route path="/sobreosite" element={<Sobreosite />} />
            <Route path="/guiasturis" element={<Guiasturis />} />
            <Route path="/Home" element={<Home />} />

          </Routes>
        </header>

      </div>
    </Router>
  );
}

export default App;
