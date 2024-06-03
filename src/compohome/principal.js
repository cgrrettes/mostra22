import './App.css';
import React from 'react';
import Navbar from './compohome/nav';
import Home from './compohome/Home';
import Footer from './footer';
import CadastroForm from './compohome/cadastro';
import Sobreosite from './compohome/sobreosite';
import Guiasturis from './compohome/guiasturis';
import Inicio from './compohome/Inicio';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/register" element={<CadastroForm />} />
            <Route path="/sobreosite" element={<Sobreosite />} />
            <Route path="/guiasturis" element={<Guiasturis />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;