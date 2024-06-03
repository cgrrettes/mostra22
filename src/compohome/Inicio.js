import React from 'react';


function Inicio() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Contato</a></li>
          <li><a href="#contact">Serviços</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="text-section">
          <h1>Bem-vindo ao Nosso Site</h1>
          <p>Seja agora um usuário da nossa plataforma, sendo intuita e acessível.</p>
          <button>Saiba Mais</button>
        </div>
        <div className="image-section">
        
        </div>
      </div>
    </div>
  );
}

export default Inicio;
